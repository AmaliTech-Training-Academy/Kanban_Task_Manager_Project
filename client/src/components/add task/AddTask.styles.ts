import styled from "styled-components";

export const Stylecontainer = styled.div`
  .new-task-container {
    /* background-color:#5680fa; */
    width: 100%;
    height: 100vh;
    /* padding: 24px; */
    /* margin: 0 auto; */
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    border: 3px solid red;
    /* background-color: rgba(0,0,0,0.6);
        backdrop-filter: blur(3px); */
  }
  form {
    /* width: 464px; */
    height: 545px;
    display: inline-flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    /* gap: 22px; */
    border-radius: 8px;
    background: #fff;
    margin: 2rem;
  }
  .headerClose {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .header {
    display: flex;
    text-align: center;
    justify-content: space-between;
    color: var(--black, #000112);
    font-family: Plus Jakarta Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .close-modal {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-left: 230px;
  }
  .title {
    color: #828fa3;
    font-family: Plus Jakarta Sans;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  input {
    color: #000112;
    font-family: Plus Jakarta Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px;
    /* opacity: 0.25; */
    width: 416px;
    padding: 9px;
  }
  .select{
    color: #000112;
    font-family: Plus Jakarta Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px;
    /* opacity: 0.25; */
    width: 434px;
    /* padding: 9px; */
    height: 260px;
    overflow-y: scroll;
    /* background-color:  orange; */
    
  }
  textarea {
    width: 416px;
    padding: 9px;
  }
  .submitt {
    width: 416px;
    /* height: 40px; */
    flex-shrink: 0;
    border-radius: 20px;
    background: #635fc7;
    border: none;
    margin-top: 50px;
    color: #fff;
    margin: 30px 0 0 10px;
  }
  .option{
    display: inline;
    background-color: red;
  }
  input[type="checkbox"]{
    background-color: green;
    width: 50px;
  }
  .check{
    display: flex;
    /* width: 200px; */
    justify-content: space-between;
    /* text-align: center; */

    /* border: 2px solid brown; */
  }
`;
