import styles from "./buttons/_contactUsButton.module.scss";
import phone from "../../assets/icons/phone";
import createWhatsAppLink from "../../modules/createWhatsAppLink";

const StudioContactUsButton = ({ whatsapp, className }: { whatsapp: string; className?: string }) => {
   const whatsappText = createWhatsAppLink(whatsapp, "Записаться с нами");

   return (
      <a href={whatsappText} target="blank" className={styles.buttonBlue + " " + className}>
         <button>
            Связаться с нами
            {phone}
         </button>
      </a>
   );
};

export default StudioContactUsButton;
