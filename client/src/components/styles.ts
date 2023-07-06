import styled from "styled-components";

export const Stylecontainer = styled.div`
  /* .container{
    overflow-x: hidden;
} */
  .image {
    width: 100%;
    /* height: 170vh; */
  }

  .content {
    margin-top: -982px;
  }
  .content h1 {
    width: 640px;
    height: 234px;
    /* display: flex; */
    flex-direction: column;
    flex-shrink: 0;
    color: #20212c;
    font-size: 62px;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 0 71px;
  }

  .content h2 {
    /* display: flex; */
    width: 550px;
    flex-direction: column;
    flex-shrink: 0;
    color: #20212c;
    font-size: 24px;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.6000000238418579;
    padding: 0 71px;
  }

  .get-started {
    padding: 0 71px;
    font-family: Plus Jakarta Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
  }
  button {
    width: 242px;
    height: 85px;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    font-size: 18px;
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
    font-size: 18px;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.6000000238418579;
  }
  .play-arrow {
    width: 45px;
    height: 45px;
    border-radius: 45px;
  }

  .forIcon {
    background-color: #635fc7;
    width: 45px;
    height: 45px;
    border-radius: 45px;

    &:hover {
      background: #a8a4ff;
    }
  }

  .trustedCom {
    height: 242px;
    width: 100%;
    margin-top: 25rem;
  }
`;
