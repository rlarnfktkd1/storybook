import React from "react";
import classNames from "classnames";
import "./Title.scss";

const Title = ({ children, size, className, border, type }) => {
  return (
    <span className={classNames("Title", size, border, className)}>
      {children}
    </span>
  );
};

Title.defaultProps = {
  size: "small",
  border: "none"
};

export default Title;
