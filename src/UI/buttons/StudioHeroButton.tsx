import phone from "../../assets/icons/phone";
import createWhatsAppLink from "../../modules/createWhatsAppLink";
import styles from "./buttons/_heroButton.module.scss";
// TODO this component will stay for refference
type whatsapp = {
   whatsapp: string;
};
const StudioHeroButton: React.FC<whatsapp> = ({ whatsapp }) => {
   const whatsappText = createWhatsAppLink(whatsapp, "Записаться на пробный урок");
   return (
      <a href={whatsappText} target="blank" className={styles.studio}>
         <button>Записаться на пробный урок {phone}</button>
      </a>
   );
};
export default StudioHeroButton;
