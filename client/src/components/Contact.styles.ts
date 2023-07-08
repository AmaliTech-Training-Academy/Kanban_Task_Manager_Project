import styled from "styled-components"

export const Stylecontainer = styled.div`
 .image{
    width: 100%;
    position: absolute;
    z-index: -1;

 }
 .section{
    /* border: 1px solid red; */
    /* background-color: #F4F7FD; */
    /* background-image: url("../assets/Images/Group 544.png"); */
    /* height: 100%; */
    /* margin-top: 50rem; */
    /* background-image: url("../assets/Images/Group 544.png"); */
 }
.contact{
    /* margin-top: -75rem; */
    text-align: center ;
}



 .contactUs{
    width: 163px;
    height: 62px;
    border: none;
    border-radius: 25px;
    display: inline-flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    background:  #E4EBFA;
    color: #635FC7;
    font-size: 24px;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
   
 }

 .text h1{
    color: #20212C;
    font-size: 52px;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;

 }

  .text2{
    display: flex;
    justify-content: center;
 }
 .text2 p{
    width: 572px;
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
 
 .asked-questions{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 70px;
 }
 
 .ans{
    width: 482px;
    color: #333441;
    background-color: #FFF;
 }
 
`