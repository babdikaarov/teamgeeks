import styles from "./_hero.module.scss";
import { FC } from "react";
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
