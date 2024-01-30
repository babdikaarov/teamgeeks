import styles from "./buttons/_heroButton.module.scss";
import phone from "../../assets/icons/phone";
import createWhatsAppLink from "../../modules/createWhatsAppLink";
type whatsapp = {
   whatsapp: string;
};
const ReserveUsButton: React.FC<whatsapp> = ({ whatsapp }) => {
   const whatsappText = createWhatsAppLink(whatsapp, "Заказать Cool Band");

   return (
      <a href={whatsappText} target="blank" className={styles.band}>
         <button>Заказать Cool Band {phone}</button>
      </a>
   );
};

export default ReserveUsButton;
