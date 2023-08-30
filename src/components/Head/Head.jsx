import React from "react";

export const Head = ({ clas, id, data, children }) => {
  console.log("children :>>", children);
  return (
    <React.Fragment>
      {children}
      <p id={id} className={clas}>
        I am Head
      </p>
    </React.Fragment>
  );
};
