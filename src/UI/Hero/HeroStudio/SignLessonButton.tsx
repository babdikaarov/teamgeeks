import { FC } from "react";
import styles from "../HeroStudio/_signLessonButton.module.scss";
import { iconPhone } from "../iconPhone";

type whatsapp = {
   whatsapp: string;
};

const SignLesson: FC<whatsapp> = (whatsapp) => {
   return (
      <button className={styles.SignLessonButton}>
         <a href={`${whatsapp}`} target="blank">
            Записаться на пробный урок {iconPhone}
         </a>
      </button>
   );
};

export default SignLesson;
