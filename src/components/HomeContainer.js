import { useMemo } from "react";
import styles from "./HomeContainer.module.css";
import { useNavigate } from "react-router-dom";

const HomeContainer = ({ propRight, propLeft }) => {

  const navigate = useNavigate();
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();


  const navigateToContactUs = () => navigate('/contact-us')
  const navigateToTerms = () => navigate1('/terms')
  const navigateToPrivacy = () => navigate2('/privacy')


  const footerStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <img className={styles.footerChild} alt="" src="/rectangle-6.svg" />
      <div className={styles.secondaryFooter}>
        <div className={styles.termsConditions} onClick={navigateToTerms}>{`Terms & Conditions`}</div>
        <div className={styles.houseowlsAllRightsContainer}>
          {`@ 2023 `}
          <span className={styles.houseowls}>houseowls</span>. All rights
          reserved.
        </div>
        <div className={styles.privacyPolicy} onClick={navigateToPrivacy} >Privacy Policy</div>
        <div className={styles.secondaryFooterChild} />
      </div>
      <div className={styles.discover}>
        <b className={styles.discoverHouseowls}>Discover Houseowls</b>
        <div className={styles.home} onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}>Home</div>
        <div className={styles.contactUs} onClick={navigateToContactUs}>Contact Us</div>

      </div>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      
      <div className={styles.loremIpsumDolor}>
      Houseowls is an upcoming and innovative player in the real estate technology sector. 
      Positioned to stand out in a competitive market, Houseowls is poised to offer a fresh and unique approach to property buying.
      What sets Houseowls apart is their emphasis on leveraging video content to enhance the property search experience.
      </div>
    </div>
  );
};

export default HomeContainer;
