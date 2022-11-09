import React from "react";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Menu from "./menu/Menu";
import MenuItem from "./menu/MenuItem";
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserActiveIcon,
  UserIcon,
} from "../../icon";
import SuggestedAccount from "../../suggestedAccount/SuggestedAccount";
const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <Menu>
        <MenuItem
          to="/"
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
          title="For You"
        />
        <MenuItem
          to="/following"
          icon={<UserIcon />}
          activeIcon={<UserActiveIcon />}
          title="Following"
        />
        <MenuItem
          to="/live"
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
          title="LIVE"
        />
      </Menu>

      <SuggestedAccount label="Suggested accounts" />
      {/* <SuggestedAccount label="Following accounts" /> */}
    </div>
  );
}

export default Sidebar;
