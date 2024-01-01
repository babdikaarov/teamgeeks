import { FC } from "react";
import styles from "../../scss/partials/ui/buttons/_contactUsButton.module.scss";
import phone from "../../assets/icons/phone";
type whatsapp = {
  whatsapp: string;
};
const ContactUsButton: FC<whatsapp> = ({ whatsapp }) => {
  return (
    <a href={whatsapp} target="blank">
      <button className={styles.buttonBlue}>
        Связаться с нами
        {phone}
      </button>
    </a>
  );
};

export default ContactUsButton;
