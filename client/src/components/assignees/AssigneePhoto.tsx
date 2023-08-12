import  * as React from 'react'
  
interface AssigneePhotoProps {
  photo: string;
  fullName: string;
}

const AssigneePhoto = ({ photo, fullName }:AssigneePhotoProps) => {
    return (
      <div className="card-image-box">
        <img src={`users/${photo}`} alt={fullName} className="card-photo" />
      </div>
    );
  }
  
  export default AssigneePhoto