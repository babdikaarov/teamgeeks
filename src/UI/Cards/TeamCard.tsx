import styles from "./cards/_teamCard.module.scss";
import { TeamCardProps } from "./types";
import { useMediaQuery } from "../../modules/hooks/useMediaQuery";
import flipHanler from "../../modules/eventHandlers";
import ImageLoader from "../ImageLoader/ImageLoader";

const TeamCard: React.FC<TeamCardProps> = ({ image, instrument, name, video, animate, bluer }) => {
   const tabletSize = useMediaQuery("(max-width: 1024px)");
   const touch = flipHanler.mouseClickOut(tabletSize);
   const mouse = flipHanler.mouseOverLeave(!tabletSize);

   return (
      <div
         className={`${styles.card} ${animate ? "firstAnimate" : ""}`}
         {...touch}
         {...mouse}
      >
         <div className={styles.front}>
            <ImageLoader
               src={image}
               bluer={bluer}
            />
            <div className={styles.text}>
               <h4>{name}</h4>
               <p>{instrument}</p>
            </div>
         </div>
         <div className={styles.back}>
            <video
               src={video}
               autoPlay
               muted
               loop
               playsInline
            ></video>
            <div className={styles.text}>
               <h4>{name}</h4>
               <p>{instrument}</p>
            </div>
         </div>
      </div>
   );
};

export default TeamCard;
