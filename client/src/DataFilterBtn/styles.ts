import styled from "styled-components";

export const StyleFilterBtn = styled.button`
  width: 201px;
  height: 47px;
  padding: 8px;
  border-radius: 8px;
  border: 1px #828fa3 solid;
  background-color: transparent;
  font-weight: 700;
  font-size: 12.7px;
  color: #3e3f4e;

  &:hover {
    cursor: pointer;
  }

  .BtnText-Img {
    align-items: center;
    width: 160px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  

  .FilterDropDown {
    width: 177px;
    height: 285px;
    border-radius: 8px;
    position: absolute;
    text-align: left;
    &:hover {
      cursor: pointer;
    }
  }
  .FilterDropDown p {
    background-color: navajowhite;
    padding: 16px;
    border-radius: 8px;
  }

  .down-arrow {
    font-size: 25px;
    font-weight: 100;
  }
`;
  
  