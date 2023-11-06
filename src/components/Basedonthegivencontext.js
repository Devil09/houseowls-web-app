import Property1NormalState from "./Property1NormalState";
import ContainerInputField from "./ContainerInputField";
import styles from "./Basedonthegivencontext.module.css";

const Basedonthegivencontext = () => {
  return (
    <div className={styles.inputFieldParent}>
      <Property1NormalState
        labelText="Name"
        inputFieldHintText="Yashvi"
        property1NormalStateGap="4px"
        property1NormalStatePosition="absolute"
        property1NormalStateTop="0px"
        property1NormalStateLeft="0px"
        textLabelLineHeight="unset"
        textLabelFontFamily="Poppins"
        textLabelFontWeight="500"
        bLineHeight="unset"
        frameDivBorder="unset"
        frameDivBackgroundColor="#f8f9fc"
        inputFieldHintFontFamily="Poppins"
        inputFieldHintOpacity="unset"
      />
      <Property1NormalState
        labelText="Email Address"
        inputFieldHintText="enter your valid email"
        property1NormalStateGap="4px"
        property1NormalStatePosition="absolute"
        property1NormalStateTop="89px"
        property1NormalStateLeft="0px"
        textLabelLineHeight="unset"
        textLabelFontFamily="Poppins"
        textLabelFontWeight="500"
        bLineHeight="unset"
        frameDivBorder="unset"
        frameDivBackgroundColor="#f8f9fc"
        inputFieldHintFontFamily="Poppins"
        inputFieldHintOpacity="0.6"
      />
      <ContainerInputField />
      <Property1NormalState
        labelText="Subject"
        inputFieldHintText="select your concern"
        property1NormalStateGap="4px"
        property1NormalStatePosition="absolute"
        property1NormalStateTop="178px"
        property1NormalStateLeft="0px"
        textLabelLineHeight="unset"
        textLabelFontFamily="Poppins"
        textLabelFontWeight="500"
        bLineHeight="unset"
        frameDivBorder="unset"
        frameDivBackgroundColor="#f8f9fc"
        inputFieldHintFontFamily="Poppins"
        inputFieldHintOpacity="0.6"
      />
      <img className={styles.groupChild} alt="" src="/group-55.svg" />
      <div className={styles.submitWrapper}>
        <div className={styles.submit}>Submit</div>
      </div>
    </div>
  );
};

export default Basedonthegivencontext;
