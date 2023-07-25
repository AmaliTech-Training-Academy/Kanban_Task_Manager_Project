import styled from 'styled-components'

export const Stylecontainer = styled.div`

.container{
    width: 100%;
        height: 100vh;
        /* padding: 24px; */
        /* margin: 0 auto; */
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        /* background-color: red; */
        background-color: rgba(0,0,0,0.6);
        backdrop-filter: blur(3px);

}

.details-modal{
    width: 464px;
    height: 545px;
        display: inline-flex;
        padding: 24px;
        flex-direction: column;
        border-radius: 8px;
        background: #FFF;
        margin: 2rem;

}

.headerClose{
        display: flex;
        justify-content: space-between;
        margin-bottom: 22px;

    }
    .header{
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
    .close-modal{
       display: flex;
        }
    .editImg{
        margin-right: 1rem;
    }   
   
    .status-box{
        width: 215px;

        display: flex;
        gap: 58px;
        align-items: center;
        margin-bottom: 22px;


    }
    .status-box label{
        font-family: "Plus Jakarta Sans", sans-serif;
        font-weight: 700;
        font-size: 15px;
        line-height: 18.9px;
    }
   .status{
    display: flex;
    align-items: center;
    padding: 8.5px;
    background-color: #e4ebfa;
    border-radius: 8px;
    gap: 16px;
   }
   .status label{
    font-weight: 700;
    font-size: 18px;
    line-height: 22.68px;
    font-family: "Plus Jakarta Sans";
    color: #635FC7;
   }
   .status img{
    width: 20px;
   }
    .date{
        width: 254px;

        display: flex;
        gap: 62px;
        align-items: center;
        margin-bottom: 22px;

    }
    .date label{
        font-family: "Plus Jakarta Sans", sans-serif;
        font-weight: 700;
        font-size: 15px;
        line-height: 18.9px;
    }
   .icon-date{
    display: flex;
    align-items: center;
    padding: 8.5px;
    /* background-color: #e4ebfa; */
    gap: 16px;
   }
   .icon-date label{
    font-weight: 700;
    font-size: 18px;
    line-height: 22.68px;
    font-family: "Plus Jakarta Sans";
    color: #828FA3;
   }
   .icon-date img{
    width: 20px;
   }

   .title-description p{
    /* width: 416px; */
    /* height: 46px; */
    
   }

   .title label{
        font-family: "Plus Jakarta Sans", sans-serif;
        font-weight: 700;
        font-size: 15px;
        line-height: 18.9px;
        margin-bottom: 22px;

    }
   .title{
        width: 254px;

        display: inline;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 22px;

   }
   .image{
    display: flex;
    align-items: center;
    padding: 8.5px;
    /* background-color: #e4ebfa; */
    /* gap: -20px; */
   }
   .image img{
    width: 20px;
    border-radius: 20px;
   }
   
`