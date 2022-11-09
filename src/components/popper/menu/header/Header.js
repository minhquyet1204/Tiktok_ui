import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "../Menu.module.scss";
const cx = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <div className={cx("header")}>
      <button className={cx("back-btn")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h3 className={cx("head-title")}>{title}</h3>
    </div>
  );
}

export default Header;
