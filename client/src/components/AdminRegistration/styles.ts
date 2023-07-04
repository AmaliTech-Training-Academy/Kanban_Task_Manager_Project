import styled from "styled-components";

export const Styledcontainer = styled.div`
  .container-body {
    width: 100%;
    height: auto;
    background-color: #e4ebfa;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* padding: 32px; */
  }

  .kanbanlogo {
    width: 296px;
    height: 49px;
    margin: 163px 0 90px 0;
    /* margin-left: 364px; */
    /* margin-top: 163px; */
    /* margin: auto; */
    /* margin-bottom: 90px; */
  }

  .registration {
    width: 712px;
    height: 558px;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 164px;
    margin: 0 0 164px 0;

    /* margin-top: 90px;
    margin-left: 364px; */
    /* padding: 648px x 494px */

    .register-container {
      width: 648px;
      height: 494px;
      padding: 32px;
      /* display: flex; */
      /* flex-direction: column; */
      /* justify-content: center; */
    }
    .register-container h1 {
      font-size: 18px;
      color: #20212c;
      font-weight: 700;
    }

    .register-container p {
      font-size: 13px;
      font-weight: 500;
      line-height: 23px;
      color: #828fa3;
    }

    .upload-photo {
      width: 290px;
      height: 107px;
      margin: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .admin-photo {
      width: 107px;
      height: 107px;
      border-radius: 50%;
    }

    .upload-photo button {
      border-radius: 100px;
      border: 1px solid rgba(130, 143, 163, 0.25);
      background-color: #635fc7;
      width: 151px;
      height: 40px;
      padding: 0px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      &:hover {
        cursor: pointer;
      }
    }

    .uploadIcon {
      width: 24px;
      height: 24px;
    }

    .upload-photo button p {
      font-size: 12px;
      font-weight: 500;
      color: white;
      font-family: Plus Jakarta Sans;
    }

    form {
      width: 648px;
      margin-top: 24px;
      display: flex;
      gap: 20px;
      height: auto;
      flex-direction: column;
    }

    .grid {
      display: flex;
      gap: 20px;
    }

    .submit-container {
      width: 303px;
      height: 40px;
      border-radius: 20px;
      margin: auto;
      border: 1px solid rgba(130, 143, 163, 0.25);
      color: white;
      font-size: 13px;
      font-weight: 700;
      font-size: 13px;
      background-color: #635fc7;
      font-family: Plus Jakarta Sans;
      &:hover {
        cursor: pointer;
      }
    }

    input {
      width: 306px;
      height: 40px;
      text-indent: 10px;
      border-radius: 4px;
      border: 1px solid rgba(130, 143, 163, 0.25);
    }
    label {
      font-size: 13px;
      font-weight: 500;
      color: #2b2c37;
    }
    ::placeholder {
      color: #000112;
      font-size: 13px;
      opacity: 0.25;
    }

    footer {
      color: #828fa3;
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      margin-top: 24px;

      a {
        text-decoration: none;
        color: #828fa3;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
