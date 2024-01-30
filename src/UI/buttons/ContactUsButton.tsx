import styles from "./buttons/_contactUsButton.module.scss";
import phone from "../../assets/icons/phone";
import createWhatsAppLink from "../../modules/createWhatsAppLink";

const ContactUsButton = ({ whatsapp, className }: { whatsapp: string; className?: string }) => {
   const whatsappText = createWhatsAppLink(whatsapp, "Связвться с нами Cool Band");

   return (
      <a href={whatsappText} target="blank" className={styles.button + " " + className}>
         <button>
            Связаться с нами
            {phone}
         </button>
      </a>
   );
};

export default ContactUsButton;
