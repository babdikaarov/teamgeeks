import { FC } from "react";
import styles from "./cards/_teamCard.module.scss";
import { TeamCardProps } from "./types";
import { useState } from "react";

const TeamCard: FC<TeamCardProps> = ({ img, role, name, video, view }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

   return (
      <div className={styles.teamCard + " " + styles[view]}>
         <div className={styles.teamCardContent}>
            <div className={styles.teamCardContentFront}>
               <div className={styles.shadow}></div>
               {!imageLoaded && (
               <div className={styles.loadingBox}>
               </div>
               )}
               <img 
                  src={img} 
                  alt={name}
                  onLoad={() => setImageLoaded(true)}
                  style={{ opacity: imageLoaded ? 1 : 0 }}
               />
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
