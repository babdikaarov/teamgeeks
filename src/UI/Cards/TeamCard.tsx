import styles from "./cards/_teamCard.module.scss";
import { TeamCardProps } from "./types";
import { useMediaQuery } from "../../modules/hooks/useMediaQuery";
import flipHanler from "../../modules/eventHandlers";

const TeamCard: React.FC<TeamCardProps> = ({ img, role, name, video }) => {
   const tabletSize = useMediaQuery("(max-width: 1024px)");
   const touch = flipHanler.touchStartEnd(tabletSize);
   const mouse1v = flipHanler.mouseOverLeave(tabletSize);
   const mouse2v = flipHanler.mouseDownUp(tabletSize);

   return (
      <div className={styles.card} {...touch} {...mouse1v}>
         <div className={styles.front}>
            <img src={img} alt={name} />
            <div className={styles.text}>
               <h4>{name}</h4>
               <p>{role}</p>
            </div>
         </div>
         <div className={styles.back}>
            <video src={video} autoPlay muted loop></video>
            <div className={styles.text}>
               <h4>{name}</h4>
               <p>{role}</p>
            </div>
         </div>
      </div>
   );
};

export default TeamCard;
