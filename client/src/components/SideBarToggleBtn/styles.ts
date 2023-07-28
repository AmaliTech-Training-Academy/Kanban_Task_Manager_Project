import styled from "styled-components";

export const ToggleButtonContainer = styled.button`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 15px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 2px;
  background-color: #635fc7;
`;

export const ToggleButtonSlider = styled.span`
  content: "";
  position: absolute;
  top: 2px;
  left: ${(props) => (props.isActive ? "20px" : "2px")};
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: left 0.3s;

`;
