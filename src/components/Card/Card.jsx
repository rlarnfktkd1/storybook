import React from "react";
import classNames from "classnames";
import "./Card.scss";

const Card = ({ children, size, className, border, type }) => {
  return (
    <div className={classNames("Card", size, border, className)}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  size: "small",
  border: "none"
};

export default Card;
