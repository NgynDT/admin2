import FormContainer from "../components/form-container";
import styles from "./index.module.css";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.desktop7}>
        <div className={styles.simpleLineIconswrench} />
        <img className={styles.desktop7Child} alt="" src="/rectangle-49.svg" />
        <div className={styles.desktop7Item} />
        <div className={styles.trangQungTr}>Trang quảng trị</div>
        <img
          className={styles.iconEnvelopeClosed}
          alt=""
          src="/-icon-envelope-closed.svg"
        />
        <img className={styles.iconBell} alt="" src="/-icon-bell.svg" />
        <img
          className={styles.iconChevronRight}
          alt=""
          src="/-icon-chevron-right.svg"
        />
        <img
          className={styles.iconChevronRight1}
          alt=""
          src="/-icon-chevron-right.svg"
        />
        <img
          className={styles.iconChevronRight2}
          alt=""
          src="/-icon-chevron-right1.svg"
        />
        <div className={styles.iconHome} />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.qunLSn}>Quản lý sản phẩm</div>
        <div className={styles.thngK}>Thống kê</div>
        <div className={styles.thngK}>Thống kê</div>
        <div className={styles.thmSnPhm}>Thêm sản phẩm</div>
        <div className={styles.danhSchHa}>Danh sách hóa đơn</div>
        <div className={styles.thitLp}>Thiết lập</div>
        <div className={styles.fluentwrench20Regular} />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        <div className={styles.admin1}>Admin</div>
        <img
          className={styles.akarIconsstatisticUp}
          alt=""
          src="/akariconsstatisticup.svg"
        />
        <img className={styles.vaadinchartIcon} alt="" src="/vaadinchart.svg" />
        <div className={styles.desktop7Inner} />
        <div className={styles.adminDanhContainer}>
          <span>Admin</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.danhSchSn}>/ Danh sách sản phẩm</span>
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.danhSchSn1}>Danh sách sản phẩm</div>
        <div className={styles.danhSchSn1}>Danh sách sản phẩm</div>
        <div className={styles.hin}>Hiện</div>
        <div className={styles.mc}>mục</div>
        <img className={styles.frameIcon} alt="" src="/frame-31.svg" />
        <div className={styles.desktop7Child1} />
        <div className={styles.tmKim}>Tìm kiếm:</div>
        <div className={styles.frameParent}>
          <div className={styles.image1Parent}>
            <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            <div className={styles.sa}>Sửa</div>
            <img className={styles.frameChild} alt="" src="/line-21.svg" />
            <div className={styles.xa}>Xóa</div>
          </div>
          <FormContainer />
          <img className={styles.image1Icon1} alt="" src="/image-11@2x.png" />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <FormContainer
            propTop="297px"
            propBackgroundColor="1px solid #fff"
            propLeft="1892px"
          />
          <div className={styles.lineDiv} />
          <div className={styles.frameChild1} />
          <div className={styles.frameChild2} />
          <div className={styles.frameChild3} />
          <div className={styles.mSnPhm}>Mã sản phẩm</div>
          <div className={styles.tnSnPhm}>Tên sản phẩm</div>
          <div className={styles.giTin}>Giá tiền</div>
          <img className={styles.image1Icon2} alt="" src="/image-12@2x.png" />
        </div>
        <div className={styles.desktop7Child2} />
        <div className={styles.desktop7Child3} />
        <div className={styles.desktop7Child4} />
        <div className={styles.desktop7Child5} />
      </div>
      <img
        className={styles.iconChevronRight3}
        alt=""
        src="/-icon-chevron-right2.svg"
      />
      <img
        className={styles.iconChevronRight4}
        alt=""
        src="/-icon-chevron-right3.svg"
      />
      <img
        className={styles.iconChevronRight5}
        alt=""
        src="/-icon-chevron-right4.svg"
      />
    </div>
  );
};

export default Admin;
