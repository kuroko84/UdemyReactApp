import React from "react";

const Tab = ({ children, buttons, BtnContainer }) => {
  return (
    <>
      <BtnContainer>{buttons}</BtnContainer>
      {children}
    </>
  );
};

export default Tab;
