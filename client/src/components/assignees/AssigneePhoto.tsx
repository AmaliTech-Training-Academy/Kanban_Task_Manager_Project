import  * as React from 'react'
  
const AssigneePhoto = ({ photo, fullName }:any):any => {
    return (
      <div className="card-image-box">
        <img src={`users/${photo}`} alt={fullName} className="card-photo" />
      </div>
    );
  }
  
  export default AssigneePhoto