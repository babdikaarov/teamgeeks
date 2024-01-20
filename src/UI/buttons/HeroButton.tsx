import styles from "./buttons/_heroButton.module.scss";
import phone from "../../assets/icons/phone";
type whatsapp = {
   whatsapp: string;
};
const ReserveUsButton: React.FC<whatsapp> = ({ whatsapp }) => {
   return (
      <a href={whatsapp} target="blank" className={styles.band}>
         <button>Заказать Cool Band {phone}</button>
      </a>
   );
};

export default ReserveUsButton;
