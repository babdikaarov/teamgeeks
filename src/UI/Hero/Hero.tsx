import styles from "./_hero.module.scss";
import { FC, useEffect } from "react";
import ReserveUsButton from "./ReserveUsButton";
interface HeroProps {
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
const Hero: FC<HeroProps> = ({ contacts, video }) => {
   useEffect(() => {
      const video = document.getElementById("videoTag");
      if (video) {
         video.onplay;
      }
   }, []);
   return (
      <div className={styles.hero}>
         <video muted autoPlay loop id="videoTag">
            <source src={video.src} type={video.type} />
         </video>
         <ReserveUsButton whatsapp={contacts} />
      </div>
   );
};

export default Hero;
