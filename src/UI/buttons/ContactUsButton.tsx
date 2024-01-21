import styles from "./buttons/_contactUsButton.module.scss";
import phone from "../../assets/icons/phone";

const ContactUsButton = ({ whatsapp, className }: { whatsapp: string; className?: string }) => {
   return (
      <a href={whatsapp} target="blank" className={styles.button + " " + className}>
         <button>
            Связаться с нами
            {phone}
         </button>
      </a>
   );
};

export default ContactUsButton;
