import styles from "./buttons/_contactUsButton.module.scss";
import phone from "../../assets/icons/phone";

const ContactUsButton = ({ whatsapp }: { whatsapp: string }) => {
  return (
    <a href={whatsapp} target="blank" className={styles.button}>
      <button className="">
        Связаться с нами
        {phone}
      </button>
    </a>
  );
};

export default ContactUsButton;
