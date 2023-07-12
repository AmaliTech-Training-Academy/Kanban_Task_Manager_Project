import * as React from "react";
import photo from "../../assets/Images/blank image.svg";
import { AiOutlineCamera } from "react-icons/ai";
import { StyledUploadPhoto } from "./styles";
import { useState } from "react";

export const UploadPhoto = () => {
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  console.log("default photo of user",profilePhoto)
  

  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  const handleUploadClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    console.log("pick profile");

    fileInput.addEventListener("change", (e: Event) => {
      const selectedFile = (e.target as HTMLInputElement).files?.[0];
      if (selectedFile) {
        setProfilePhoto(selectedFile);
        setPhotoUrl(URL.createObjectURL(selectedFile)); // Create a temporary URL for the selected photo
      }
    });

    fileInput.click();
  };

  return (
    <StyledUploadPhoto>
      <div className="upload-photo">
        <div className="admin-photo">
          <img
            className="admin-photo"
            src={photoUrl || photo}
            alt="photo display"
          />
          {/* Use the photoUrl state variable as the source */}
        </div>
        <button onClick={handleUploadClick}>
          <AiOutlineCamera className="uploadIcon" />
          <p className="upload-pic-text">Upload picture</p>
        </button>
      </div>
    </StyledUploadPhoto>
  );
};
