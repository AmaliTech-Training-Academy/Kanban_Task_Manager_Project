import nodemailer from "nodemailer";
import { convert } from "html-to-text";
import pug from "pug";

// Transporter
class Email {
  to: string;
  firstName: string;
  url: string;
  from: string;
  email: string;

  constructor(user: any, url: string) {
    this.to = user.email;
    this.firstName = user.fullName?.split(" ")[0];
    this.email = user.email;
    this.url = url;
    this.from = `Kanban <kanban@gmail.com}>`;
  }

  newTransport() {
    let EMAIL_HOST: string = process.env.EMAIL_HOST || "";
    let EMAIL_PORT: number = Number(process.env.EMAIL_PORT || "");

    if (process.env.NODE_ENV === "production") {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_ADD,
          pass: process.env.EMAIL_PASS,
        },
      });
      return transporter;
    }

    return nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send the actual email
  async send(template: any, subject: string) {
    // STEP:  Render HTML based on a pug template
    const html = pug.renderFile(`./views/email/${template}.pug`, {
      firstName: this.firstName,
      email: this.email,
      url: this.url,
      subject,
    });

    // STEP:  Defimne email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: convert(html),
    };

    // STEP: Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }
  async sendMultiple(
    template: any,
    subject: string,
    recipients: [],
    task: string | any,
    dueDate: string | any
  ) {


    const promise = [];
    for (const user of recipients) {
      const { email } = user;
      const userObj: any = user;
      const firstName =
        userObj.fullName.charAt(0).toUpperCase() +
        userObj.fullName.slice(1).split(" ")[0];

      const html = pug.renderFile(`./views/email/${template}.pug`, {
        task,
        dueDate,
        firstName: firstName,
        email: email,
        url: this.url,
        subject,
      });

      // STEP:  Defimne email options
      const mailOptions = {
        from: this.from,
        to: email,
        subject,
        html,
        text: convert(html),
      };

      // STEP: Create a transport and send email
      promise.push(this.newTransport().sendMail(mailOptions));
    }

    await Promise.all(promise);
  }

  async sendAdminVerificationMail() {
    await this.send("adminVerifyMail", "Admin Verification");
  }
  async sendUserVerificationMail(recipients: []) {
    await this.sendMultiple(
      "userVerificationMail",
      "User Verification",
      recipients,
      null,
      null
    );
  }
  async sendAssigneeMail(recipients: [], task: string, dueDate: string) {
    await this.sendMultiple(
      "assigneeMail",
      "Assign Task",
      recipients,
      task,
      dueDate
    );
  }
  async sendPasswordReset() {
    await this.send(
      "sendPasswordReset",
      "Reset Your Password (valid for 10 minutes)"
    );
  }
}

export default Email;
