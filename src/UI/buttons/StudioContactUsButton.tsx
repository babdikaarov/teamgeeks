import styles from "./buttons/_contactUsButton.module.scss";
import phone from "../../assets/icons/phone";
import { tempLinks } from "../../tempData/getHeaderData";

const StudioContactUsButton = () => {
  return (
    <a href={tempLinks.whatsapp} target="blank">
      <button className={styles.buttonBlue}>
        Связаться с нами
        {phone}
      </button>
    </a>
  );
};

export default StudioContactUsButton;
