import styled from "styled-components";

export const StyledNewPasswordForm = styled.form`
  form {
    width: 416px;
    margin-top: 32px;
    display: flex;
    gap: 32px;
    height: auto;
    flex-direction: column;
  }

  .submit-button-container {
    width: 416px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    color: white;
    font-size: 13px;
    font-weight: 700;
    font-size: 13px;
    background-color: #635fc7;
    font-family: Plus Jakarta Sans;
    align-self: center;
    &:hover {
      cursor: pointer;
    }
  }

  input {
    width: 416px;
    height: 40px;
    text-indent: 10px;
    border-radius: 4px;
    border: 1px solid rgba(130, 143, 163, 0.25);
  }
  input:focus {
    outline-color: #828fa3;
  }

  label {
    font-size: 13px;
    font-weight: 500;
    color: #2b2c37;
    display: block;
  }
  ::placeholder {
    color: #000112;
    font-size: 13px;
    opacity: 0.25;
  }
`;
