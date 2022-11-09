import Button from "../../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./AccountPreview.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7472af7258e7866e213b6a8a212e2d44.jpeg?x-expires=1667635200&x-signature=1Log96mmrtQRmRjkjfuCbMp%2BY8A%3D"
          alt=""
        />
        <Button primary>Follow</Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>Quyet</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Le Minh Quyet</p>
        <p className={cx("analytic")}>
          <strong className={cx("value")}>12.4M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>12.4M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
