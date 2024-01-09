import styles from "./buttons/_contactUsButton.module.scss";
import phone from "../../assets/icons/phone";

type Whatsapp = {
  whatsapp: string;
};

const StudioContactUsButton = ({ whatsapp }: Whatsapp) => {
  return (
    <a href={whatsapp} target="blank" className={styles.buttonContainer}>
      <button className={styles.buttonBlue}>
        Связаться с нами
        {phone}
      </button>
    </a>
  );
};

export default StudioContactUsButton;
