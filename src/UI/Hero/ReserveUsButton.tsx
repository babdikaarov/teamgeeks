import styles from "./_reserveUsButton.module.scss";
import { FC } from "react";
import { iconPhone } from "./iconPhone";
type whatsapp = {
  whatsapp: string;
};
const ReserveUsButton: FC<whatsapp> = (whatsapp) => {
  return (
    <button className={styles.reserveUsButton}>
      <a href={`${whatsapp}`}>Заказать Шоу {iconPhone}</a>
    </button>
  );
};

export default ReserveUsButton;
