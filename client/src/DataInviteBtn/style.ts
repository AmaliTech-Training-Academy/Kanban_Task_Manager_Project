import styled from "styled-components";

export const StyleInviteBtn = styled.button`
  width: 170px;
  height: 47px;
  padding: 31px, 14px, 31px;
  border-radius: 100px;
  border: 1px #828fa3 solid;
  background-color: #635fc7;
  color: white;
  font-weight: 700;
  font-size: 12.7px;

  &:hover {
    cursor: pointer;
    background-color: #a8a4ff;
  }
  &:active {
    cursor: pointer;
    transform: translateY(2px);
  }
`;