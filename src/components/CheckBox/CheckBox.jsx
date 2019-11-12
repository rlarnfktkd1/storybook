// @flow
import * as React from "react";
// import "./CheckBox.scss";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import classNames from "classnames/bind";
import styles from "./CheckBox.scss";

const cx = classNames.bind(styles);

const CheckBox = ({ checked, children, color, size, className, ...rest }) => {
  return (
    <div className={cx("checkbox", color)}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={cx("icon", size)}>
          {checked ? (
            <MdCheckBox className={cx("checked")} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
};

CheckBox.defaultProps = {
  size: "medium",
  color: "blue"
};

export default CheckBox;
