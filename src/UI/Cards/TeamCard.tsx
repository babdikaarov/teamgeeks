import { FC } from "react";
import styles from "./cards/_teamCard.module.scss";
import { TeamCardProps } from "./types";

const TeamCard: FC<TeamCardProps> = ({ img, role, name, video, view }) => {
   return (
      <div className={styles.teamCard + " " + styles[view]}>
         <div className={styles.teamCardContent}>
            <div className={styles.teamCardContentFront}>
               <div className={styles.shadow}></div>
               <img src={img} alt={name} />
               <h4>{name}</h4>
               <p>{role}</p>
            </div>
            <div className={styles.teamCardContentBack + " " + styles[view]}>
               <div className={styles.shadow}></div>
               <video src={video} autoPlay muted loop></video>
               <h4>{name}</h4>
               <p>{role}</p>
            </div>
         </div>
      </div>
   );
};

export default TeamCard;
