import { FC } from "react";
import phone from "../../assets/icons/phone";
import styles from "../../scss/partials/ui/buttons/_studioHeroButton.module.scss";

type whatsapp = {
   whatsapp: string;
};
const StudioHeroButton: FC<whatsapp> = ({ whatsapp }) => {
   return (
      <a href={whatsapp} target="blank">
         <button className={styles.button}>Записаться на пробный урок {phone}</button>
      </a>
   );
};
export default StudioHeroButton;
