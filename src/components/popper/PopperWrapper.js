import React from "react";
import classNames from "classnames/bind";
import styles from "./PopperWrapper.module.scss";
const cx = classNames.bind(styles);

function PopperWrapper({ children, className }) {
  return <div className={cx("wrapper", className)}>{children}</div>;
}

export default PopperWrapper;
