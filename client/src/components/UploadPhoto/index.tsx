import * as React from 'react'
import photo from "../../assets/Images/Frame a.png";
import { AiOutlineCamera } from 'react-icons/ai';
import { StyledUploadPhoto } from './styles';


export const UploadPhoto = () => {


    
  return (
    <StyledUploadPhoto>
      <div className="upload-photo">
        <div className="admin-photo">
          <img className="admin-photo" src={photo} alt="photo display" />
        </div>
        <button>
          <AiOutlineCamera className="uploadIcon" />
          <p className='upload-pic-text'>Upload picture</p>
        </button>
      </div>
    </StyledUploadPhoto>
  );
}

