import styled from "styled-components";

export const Stylecontainer = styled.div`
  .image {
    width: 100%;
  }

  .section {
    background-color: #f4f7fd;
    height: 100%;
    margin-top: 5rem;
  }

  .about {
    margin-top: -80rem;
  }

  .section .about {
    text-align: center;
  }
  .aboutUs {
    width: 182px;
    border: none;
    border-radius: 25px;
    display: inline-flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    background: #e4ebfa;
    color: #635fc7;
    font-size: 24px;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .text {
    text-align: center;
  }

  .text h1 {
    width: 468;
    height: 66px;
    color: #20212c;
    font-size: 39.81px;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
  }

  .section .text2 {
    display: flex;
    justify-content: center;
  }
  .text2 p {
    height: 46px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    /* font-size: 16px; */
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.699999988079071;
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding: 50px 70px;
  }
  .content-sec {
    padding: 30px 0;
  }
  .content-img img {
    width: 550px;
    height: 544px;
  }
  .content-sec h1 {
    width: 356px;
    height: 120px;
    flex-direction: column;
    flex-shrink: 0;
    color: #20212c;
    font-family: Plus Jakarta Sans;
    font-size: 47.78px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .content-sec p {
    width: 530px;
    height: 60px;
    flex-direction: column;
    flex-shrink: 0;
    color: #000;
    font-family: Plus Jakarta Sans;
    /* font-size: 16px; */
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.699999988079071;
  }
  button {
    width: 136px;
    height: 48px;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #635fc7;
    box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-family: Plus Jakarta Sans;
    /* font-size: 16px; */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    margin-top: 20px;

    a {
      text-decoration: none;
      color: #fff;
    }

    &:hover {
      background: #a8a4ff;
      cursor: pointer;
    }
  }
`;
