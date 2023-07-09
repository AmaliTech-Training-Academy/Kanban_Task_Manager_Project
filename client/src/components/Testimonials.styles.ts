import styled from "styled-components";

export const Stylecontainer = styled.div`
  .ourtestimonial {
    width: 226px;
    height: 62px;
    border: none;
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
    margin-top: 150px;
    margin-left: 70px;
  }

  .text h1 {
    color: #20212c;
    font-size: 40px;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 70px;
    padding: 0 0px;
  }

  .text2 p {
    height: 23px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    color: #000;
    font-size: 18px;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.699999988079071;
    margin-left: 70px;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 50px 71px;
    gap: 20px;
  }
  .card {
    width: 350px;
    height: 210px;
    display: flex;
    padding: 15px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 36.051px;
    border-radius: 28.841px;
    background: #f4f7fd;
    box-shadow: 0px 0.9012874960899353px 2.7038626670837402px
        0.9012874960899353px rgba(0, 0, 0, 0.15),
      0px 0.9012874960899353px 1.8025749921798706px 0px rgba(0, 0, 0, 0.3);
    &:active {
      background: #635fc7;
    }
    &:hover {
      background: #635fc7;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
  }
  .photoImg {
    width: 76.609px;
    height: 76.609px;
    flex-shrink: 0;
    border-radius: 76.609px;
    border: 1.803px solid var(--white, #fff);
    background: #d9d9d9;
    box-shadow: 0px 3.605149984359741px 8.111587524414062px 0px
      rgba(0, 0, 0, 0.25);
  }
  .Logo {
    width: 39.657px;
    height: 39.657px;
    padding: 20px 35px;
    flex-shrink: 0;
    filter: drop-shadow(
      0px 3.605149984359741px 8.111587524414062px rgba(0, 0, 0, 0.25)
    );
  }
  .content {
    display: flex;
    text-align: center;
    padding: 0 23px;
  }
  .text3 {
    margin-left: 30px;
  }

  .testimony {
    opacity: 0.69;
  }

  .card p {
    color: #000 !important;
    font-family: Plus Jakarta Sans;
    font-size: 16.223px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
