import styled from "styled-components";


export const StyledUploadPhoto = styled.div`
  .upload-photo {
    width: 290px;
    height: 107px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .admin-photo {
    width: 107px;
    height: 107px;
    border-radius: 50%;
  }

  .upload-photo button {
    border-radius: 100px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    background-color: #635fc7;
    width: 151px;
    height: 40px;
    padding: 0px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }

  .uploadIcon {
    width: 24px;
    height: 24px;
  }

   button p {
    font-size: 12px;
    font-weight: 500;
    font-family: Plus Jakarta Sans;
  }
`;