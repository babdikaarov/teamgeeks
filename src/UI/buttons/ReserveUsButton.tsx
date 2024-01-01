import { FC } from "react";
import styles from "../../scss/partials/ui/buttons/_reserveUsButton.module.scss";
import phone from "../../assets/icons/phone";
type whatsapp = {
   whatsapp: string;
};
const ReserveUsButton: FC<whatsapp> = ({ whatsapp }) => {
   return (
      <a href={whatsapp} target="blank">
         <button className={styles.button}>Заказать Шоу {phone}</button>
      </a>
   );
};

export default ReserveUsButton;
