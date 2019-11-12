import React from "react";
import "./Button.scss";
import classNames from "classnames";

const Button = ({
  children,
  size,
  outline,
  color,
  className,
  selected,
  ...rest
}) => {
  return (
    <div className="c-Button">
      <button
        className={classNames("Button", size, color, { outline }, className)}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  size: "large",
  color: "blue",
  selected: false
};

export default Button;
