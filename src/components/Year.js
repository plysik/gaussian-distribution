import React from "react";

export default () => {
  const currYear = new Date().getFullYear();
  return <React.Fragment>{currYear}</React.Fragment>;
};
