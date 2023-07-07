import styled from "styled-components";

export const StyledRegistrationForm = styled.form`

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
    `