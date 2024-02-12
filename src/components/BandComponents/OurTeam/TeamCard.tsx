// modules
import { useMediaQuery } from "../../../modules/hooks/useMediaQuery";
import flipHanler from "../../../modules/eventHandlers";
// components
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";
// styles
import styles from "./_teamCard.module.scss";

const TeamCard: React.FC<Card.TeamCardProps> = ({ image, instrument, name, video, animate, bluer }) => {
   const tabletSize = useMediaQuery("(max-width: 1024px)");
   const touch = flipHanler.mouseClickOut(tabletSize);
   const mouse = flipHanler.mouseOverLeave(!tabletSize);

   return (
      <div
         className={`${styles.card}`}
         data-animate={animate}
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
