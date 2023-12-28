import { FC } from "react";
import styles from "../../scss/partials/ui/_reserveUsButton.module.scss";
import { iconPhone } from "./iconPhone";
type whatsapp = {
  whatsapp: string;
};
const ReserveUsButton: FC<whatsapp> = ({ whatsapp }) => {
  return (
    <button className={styles.reserveUsButton}>
      <a href={whatsapp} target="blank">
        Заказать Шоу {iconPhone}
      </a>
    </button>
  );
};

export default ReserveUsButton;
