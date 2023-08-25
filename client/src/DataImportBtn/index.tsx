import React, {useState} from 'react'
import { StyledDataImportBtn } from "./styles";
import cloudImg from "../assets/Icons/cloud.svg"

export const DataImpotBtn = () => {
  const [data, setData] = useState<any>(null)

  const handleImportData = async () => {
    try {
      const response = await fetch('API_URL');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error importing data:',error);
    }
    
  }





    return (
      <StyledDataImportBtn>
        <div  className='BtnText-Img' onClick={handleImportData}>
          Bulk import
          <img src= {cloudImg} alt="" />
        </div>
      </StyledDataImportBtn>
    );
}
