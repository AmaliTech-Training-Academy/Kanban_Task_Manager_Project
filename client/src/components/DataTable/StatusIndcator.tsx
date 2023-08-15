// StatusIndicator.tsx
import React from "react";

interface StatusIndicatorProps {
  status: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  return (
    <div>
      <span
        style={{
          display: "inline-block",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: status === "active" ? "red" : "grey",
          marginRight: "5px",
        }}
      ></span>
      {status}
    </div>
  );
};

export default StatusIndicator;
