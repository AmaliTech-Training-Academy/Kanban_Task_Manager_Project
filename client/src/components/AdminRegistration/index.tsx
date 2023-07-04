import { Styledcontainer } from "./styles";
import Logo from "../../assets/Icons/logo.png";
import photo from "../../assets/Images/Frame a.png";
import { AiOutlineCamera } from "react-icons/ai";

export const Admin = () => {
  return (
    <Styledcontainer>
      <div className="container-body">
        <div className="container">
          <img className="kanbanlogo" src={Logo} alt="logo" />
          <div className="registration">
            <div className="register-container">
              <h1>Registration</h1>
              <p>
                Pleae fill out the required fields below to create your account.
                We look forward to having yo join our community
              </p>
              <div className="upload-photo">
                <div className="admin-photo">
                  <img
                    className="admin-photo"
                    src={photo}
                    alt="photo display"
                  />
                </div>
                <button>
                  <AiOutlineCamera className="uploadIcon" />
                  <p>Upload picture</p>
                </button>
              </div>
              <form action="/submit-form" method="POST">
                <div className="grid">
                  <div className="form1">
                    <label htmlFor="fullname">Fullname</label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      placeholder="e.g. Salami Joseph"
                    ></input>
                  </div>

                  <div className="form1">
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      name="password"
                      id="fullname"
                      placeholder="************"
                    ></input>
                  </div>
                </div>

                <div className="grid">
                  <div className="form1">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="e.g theresah@kanban.com"
                    ></input>
                  </div>

                  <div className="form1">
                    <label htmlFor="confirm">Comfirm Password</label>
                    <input
                      type="text"
                      name="confirmpassword"
                      id="confirmpassword"
                      placeholder="***********"
                    ></input>
                  </div>
                </div>
                <button type="submit" className="submit-container">
                  Create account
                </button>
              </form>
              <footer>
                Already have an account? <a href="http:// ">Login</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </Styledcontainer>
  );
};
