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
    }
    .delete-modal{
        width: 464px;
        height: 263px;
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
    .header h3{
        color: #EA5555;
    }
    .close-modal{
        /* display: flex;
        justify-content: space-between;
        text-align: center;
        margin-left: 230px;
        border: 1px solid red; */
    }
.title{
            color: #828FA3;
        font-family: Plus Jakarta Sans;
        /* font-size: 36px; */
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 10px;
        margin-top: 20px;
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
padding: 2%;
}

.submitt{
width: 416px;
/* height: 40px; */
/* flex-shrink: 0; */
border-radius: 20px;
background: #EA5555;
border: none;
margin-top: 30px;
color: #fff;
}
.submittt{
width: 416px;
/* height: 40px; */
/* flex-shrink: 0; */
border-radius: 20px;
background: rgba(99, 95, 199, 0.10);
border: none;
margin-top: 30px;
color: #635FC7;
}

 p{
font-family: Plus Jakarta Sans;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 23px; /* 176.923% */
margin-top: 1rem;
}
`
