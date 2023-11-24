import styles from "./PhoneFormContainer1.module.css";

const PhoneFormContainer1 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.phoneIconParent}>
        <img className={styles.phoneIcon} alt="" src="/phone-icon1.svg" />
        <div className={styles.div}>+91 7999 095 132</div>
      </div>
      <div className={styles.bxlinstagramAltParent}>
        <img className={styles.phoneIcon} alt="" src="/bxlinstagramalt.svg" />
        <div className={styles.div}>@houseowls_official</div>
      </div>
      <div className={styles.emailParent}>
        <img className={styles.phoneIcon} alt="" src="/email1.svg" />
        <div className={styles.contacthouseowlscom}>team@houseowls.in</div>
      </div>
      <div className={styles.locationPinParent}>
        <img className={styles.phoneIcon} alt="" src="/location-pin1.svg" />
        <div className={styles.contacthouseowlscom}>
          <p
            className={styles.prospectStreet7th}
          >{`HD-033 at, WeWork Vi-John Tower, `}</p>
          <p className={styles.prospectStreet7th}>{`393, Phase III, Udyog Vihar, Sector 19, `}</p>
          <p className={styles.unitedStates}>Gurugram, Haryana 122016</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneFormContainer1;
