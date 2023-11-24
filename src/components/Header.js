import { useMemo } from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ whatsAppImage20231022At0FontWeight }) => {

  const navigate = useNavigate();
  const navigateToContactUs = () => navigate('/contact-us')
  const navigateToHome = () => navigate('/')

  const homeStyle = useMemo(() => {
    return {
      fontWeight: whatsAppImage20231022At0FontWeight,
    };
  }, [whatsAppImage20231022At0FontWeight]);

  return (
    <div className={styles.topBarParent}>
      <div className={styles.topBar}>
        <div className={styles.topBarChild} />
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.contactUs} onClick={navigateToContactUs}>Contact Us</div>
          {/* <Link to="/contact-us">Clik me</Link> */}
        </div>
        <div className={styles.tabs} onClick={navigateToHome}>
          <b className={styles.home} style={homeStyle} >
            Home
          </b>
          {/* <div className={styles.home}>About us</div> */}
        </div>
      </div>
      <img
        className={styles.whatsappImage20231022At0}
        alt=""
        src="/whatsapp-image-20231022-at-0012-1@2x.png"
      />
    </div>
  );
};

export default Header;
