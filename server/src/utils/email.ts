import nodemailer from 'nodemailer';
import { convert } from 'html-to-text';
import pug from 'pug';

// Transporter
class Email {
  to: string;
  firstName: string;
  url: string;
  from: string;
  email: string;

  constructor(user: any, url: string) {
    this.to = user.email;
    this.firstName = user.fullName.split(' ')[0];
    this.email = user.email;
    this.url = url;
    this.from = `Kanban <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    let EMAIL_HOST: string = process.env.EMAIL_HOST || '';
    let EMAIL_PORT: number = Number(process.env.EMAIL_PORT || '');

    if (process.env.NODE_ENV === 'production') {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
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

  async sendAdminVerificationMail() {
    await this.send('adminVerifyMail', 'Admin Verification');
  }
  async sendUserVerificationMail() {
    await this.send('userVerificationMail', 'User Verification');
  }
  async sendPasswordReset() {
    await this.send('sendPasswordReset', 'Reset Your Password (valid for 10 minutes)');
  }
}

export default Email;
