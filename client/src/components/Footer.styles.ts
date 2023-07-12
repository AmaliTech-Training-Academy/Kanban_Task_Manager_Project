import styled from "styled-components";

export const Stylecontainer = styled.div`
  .footer {
    padding: 2rem 5rem;
    display: flex;
    justify-content: space-between;
  }
  .footerr {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 211px;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  .footerr h3 {
    color: #20212c;
    font-family: Plus Jakarta Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .footerr p {
    color: #000;
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.6000000238418579;
  }

  .enterFold h3 {
    color: #20212c;
    font-family: Plus Jakarta Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .enterFold p {
    display: flex;
    width: 310px;
    flex-direction: column;
    color: #000;
    font-family: Plus Jakarta Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.6000000238418579;
  }
  .icons {
    text-align: center;
  }
  .input {
    border-radius: 20px;
    color: #000;
    font-family: Plus Jakarta Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.30000001192092896;
    padding: 8px;
    gap: 8px;
    text-align: center;
  }
  .subscribe {
    width: 128px;
    height: 54px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    color: #fff;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #635fc7;
    box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);
    margin-left: 15px;
  }
`;
