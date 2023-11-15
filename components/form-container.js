import { useMemo } from "react";
import styles from "./form-container.module.css";

const FormContainer = ({ propTop, propBackgroundColor, propLeft }) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
      backgroundColor: propBackgroundColor,
    };
  }, [propTop, propBackgroundColor]);

  const lineIconStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.saParent} style={frameDivStyle}>
      <div className={styles.sa}>Sửa</div>
      <img
        className={styles.frameChild}
        alt=""
        src="/line-23.svg"
        style={lineIconStyle}
      />
      <div className={styles.xa}>Xóa</div>
    </div>
  );
};

export default FormContainer;
