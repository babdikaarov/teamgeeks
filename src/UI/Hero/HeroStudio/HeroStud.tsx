import { FC, useEffect } from "react";
import styles from "../../../scss/partials/coolStudio/_heroStudio.module.scss";
import SignLessonButton from "./SignLessonButton";

interface HeroStudioProps {
   contacts: string;
   video: {
      src: string;
      type: string;
   };
   image: {
      src: string;
      alt: string;
   };
}
const HeroStudio: FC<HeroStudioProps> = ({ contacts, video }) => {
   useEffect(() => {
      const video = document.getElementById("Video");
      if (video) {
         video.onplay;
      }
   }, []);
   return (
      <div className={styles.hero}>
         <video muted autoPlay loop id="Video">
            <source src={video.src} type={video.type} />
         </video>
         <div className={styles.text}>
            <h2>Откройте двери в мир музыки с Coolstudio</h2>
            <p>
               Очарование кавербэнда, магия танцевального шоу, творчество в студии — воплощаем вашу музыкальную мечту!
            </p>
         </div>
         <SignLessonButton whatsapp={contacts} />
      </div>
   );
};

export default HeroStudio;
