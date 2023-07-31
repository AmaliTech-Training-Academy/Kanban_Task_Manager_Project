import styled from 'styled-components'

export const Stylecontainer = styled.div`
    .container{
        width: 100%;
        height: 100vh;
        /* padding: 24px; */
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:rgba(0,0,0,0.6);
    }
    form{
        width: 464px;
        height: 545px;
        display: inline-flex;
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        /* gap: 22px; */
        border-radius: 8px;
        background: #FFF;
        margin: 2rem;

    }
    .headerClose{
        width: 100%;
        display: flex;
        justify-content: space-between;
        /* text-align: center; */
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
        /* display: flex;
        justify-content: space-between;
        text-align: center;
        margin-left: 230px; */

    }
.title{
            color: #828FA3;
        font-family: Plus Jakarta Sans;
        /* font-size: 36px; */
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-top: 20px;
        margin-bottom: 20px;
    }
input{
    color: #000112;
font-family: Plus Jakarta Sans;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 23px;
/* opacity: 0.25; */
width: 416px;
}

.submitt{
width: 416px;
/* height: 40px; */
flex-shrink: 0;
border-radius: 20px;
background: #635FC7;
border: none;
margin-top: 50px;
color: #fff;
}

`
