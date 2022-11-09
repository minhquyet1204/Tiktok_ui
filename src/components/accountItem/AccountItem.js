import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "../image/Image";
const cx = classNames.bind(styles);

function AccountItem({ result }) {
  return (
    <Link to={`/@${result.nickname}`} className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src={result.avatar}
        alt={result.full_name}
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          {result.full_name}
          <span>
            {result.tick && (
              <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
            )}
          </span>
        </h4>
        <span className={cx("username")}>{result.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
