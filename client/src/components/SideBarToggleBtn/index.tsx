import * as React from "react";
import { useState } from "react";
import { ToggleButtonContainer, ToggleButtonSlider } from "./styles";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <ToggleButtonContainer onClick={handleToggle}>
      <ToggleButtonSlider isActive={isActive} />
    </ToggleButtonContainer>
  );
};

export default ToggleButton;
