import phone from "../../assets/icons/phone";
import styles from "./buttons/_heroButton.module.scss";
// TODO this component will stay for refference
type whatsapp = {
   whatsapp: string;
};
const StudioHeroButton: React.FC<whatsapp> = ({ whatsapp }) => {
   return (
      <a href={whatsapp} target="blank" className={styles.studio}>
         <button>Записаться на пробный урок {phone}</button>
      </a>
   );
};
export default StudioHeroButton;
