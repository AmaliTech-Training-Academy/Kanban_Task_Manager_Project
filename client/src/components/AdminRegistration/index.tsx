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
            </div>
          </div>
        </div>
      </div>
    </Styledcontainer>
  );
};
