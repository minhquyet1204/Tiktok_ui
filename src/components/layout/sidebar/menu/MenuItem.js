import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

function MenuItem({ to, icon, title, activeIcon }) {
  return (
    <NavLink
      className={(nav) =>
        cx("menu-item", {
          active: nav.isActive,
        })
      }
      to={to}
      end
    >
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("active-icon")}>{activeIcon}</span>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}

export default MenuItem;
