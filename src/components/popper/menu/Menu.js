import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import PopperWrapper from "../PopperWrapper";
import MenuItem from "./MenuItem";
import Header from "./header/Header";

const cx = classNames.bind(styles);

function Menu({ children, items, hideOnClick = false }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };
  return (
    <div>
      <Tippy
        interactive
        delay={[0, 800]}
        offset={[16, 12]}
        placement="bottom-end"
        hideOnClick={hideOnClick}
        render={(attrs) => (
          <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("menu-popper")}>
              {history.length > 1 && (
                <Header
                  title="Language"
                  onBack={() =>
                    setHistory((prev) => prev.slice(0, prev.length - 1))
                  }
                />
              )}
              {renderItems()}
            </PopperWrapper>
          </div>
        )}
        onHide={() => setHistory((prev) => prev.slice(0, 1))}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Menu;
