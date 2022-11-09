import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import PopperWrapper from "../popper/PopperWrapper";

import styles from "./SuggestedAccount.module.scss";
import classNames from "classnames/bind";
import AccountPreview from "./accountPreview/AccountPreview";
const cx = classNames.bind(styles);
function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div className={cx("preview")}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[0, -4]}
        placement="bottom-start"
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7472af7258e7866e213b6a8a212e2d44.jpeg?x-expires=1667635200&x-signature=1Log96mmrtQRmRjkjfuCbMp%2BY8A%3D"
            alt=""
          />

          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>Quyet</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>Le Minh Quyet</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
