import React from "react";

const loaderStyle: React.CSSProperties = {
  border: "4px solid #f3f3f3",
  borderTop: "4px solid rgb(101, 101, 101)",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  animation: "spin 2s linear infinite",
  margin: "4px auto",
};

const Spinner: React.FC = () => (
  <>
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
    <div style={loaderStyle}></div>
  </>
);

export default Spinner;
