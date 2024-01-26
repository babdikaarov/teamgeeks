import styles from "./cards/_teamCard.module.scss";
import { TeamCardProps } from "./types";
import { useMediaQuery } from "../../modules/hooks/useMediaQuery";
import flipHanler from "../../modules/eventHandlers";

const TeamCard: React.FC<TeamCardProps> = ({ img, role, name, video }) => {
   const tabletSize = useMediaQuery("(max-width: 1024px)");
   const touch = flipHanler.mouseTouchClickStart(tabletSize);
   const mouse = flipHanler.mouseOverLeave(!tabletSize);

   return (
      <div className={styles.card} {...touch} {...mouse}>
         <div className={styles.front}>
            <img src={img} alt={name} />
            <div className={styles.text}>
               <h4>{name}</h4>
               <p>{role}</p>
            </div>
         </div>
         <div className={styles.back}>
            <video src={video} autoPlay muted loop playsInline></video>
            <div className={styles.text}>
               <h4>{name}</h4>
               <p>{role}</p>
            </div>
         </div>
      </div>
   );
};

export default TeamCard;
