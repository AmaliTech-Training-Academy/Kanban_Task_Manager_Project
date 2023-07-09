import styled from "styled-components";

export const Stylecontainer = styled.div`
  .image {
    width: 100%;
  }

  .content {
    margin-top: -882px;
  }
  .content h1 {
    width: 640px;
    height: 120px;
    flex-direction: column;
    flex-shrink: 0;
    color: #20212c;
    font-size: 47.78px;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 0 70px;
  }

  .content h2 {
    width: 417px;
    height: 100px;
    flex-direction: column;
    flex-shrink: 0;
    color: #20212c;
    font-size: 16px;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.6000000238418579;
    padding: 0 70px;
  }

  .get-started {
    padding: 25px 70px;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  button {
    width: 136px;
    height: 48px;
    padding: 16px;
    align-items: center;
    color: #fff;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 100px;
    border: none;
    background: #635fc7;
    box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);

    &:hover {
      background: #a8a4ff;
      cursor: pointer;
    }
  }

  .videoIcon {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin: 0 41px;
  }

  .watchdemo {
    margin: 0 15px;
    text-decoration: none;
    color: #000;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.6000000238418579;
  }
  .play-arrow {
    width: 30px;
    height: 30px;
    margin-left: 7px;
    margin-top: 5px;
    border-radius: 45px;
  }

  .forIcon {
    background-color: #635fc7;
    width: 40px;
    height: 40px;
    border-radius: 45px;

    &:hover {
      background: #a8a4ff;
    }
  }

  .trusted-companies {
    width: 100%;
    height: 194px;
    background-color: #20212c;
    margin-top: 25rem;
    text-align: center;
  }
  .trusted-companies h1 {
    font-family: Plus Jakarta Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #fff;
    margin-top: 7px;
  }
  .allCompanies {
    padding: 27px;
  }
  .img {
    margin-top: 48px;
  }
`;
