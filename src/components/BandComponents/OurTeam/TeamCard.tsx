// modules
import { useMediaQuery } from "../../../modules/hooks/useMediaQuery";
import flipHanler from "../../../modules/eventHandlers";
// components
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";
// styles
import styles from "./_teamCard.module.scss";
import { useEffect, useRef } from "react";

const TeamCard: React.FC<Card.TeamCardProps> = ({ image, instrument, name, video, animate, bluer }) => {
   const tabletSize = useMediaQuery("(max-width: 1024px)");
   const touch = flipHanler.mouseClickOut(tabletSize);
   const mouse = flipHanler.mouseOverLeave(!tabletSize);
   const videoRef = useRef<HTMLVideoElement>(null);

   useEffect(() => {
      const videoElement = videoRef.current;
      if (!videoElement)return
      // videoElement.setAttribute("muted", "true");
      videoElement.setAttribute("muted", "");
      videoElement.onpause  = () => (videoElement.play());
      videoElement.play()
      console.log(videoElement.play());

   }, []);

   
   return (
      
      <div className={`${styles.card}`} data-animate={animate} {...touch} {...mouse}>
         <div className={styles.front}>
            <ImageLoader src={image} bluer={bluer} />
            <div className={styles.text}>
               <div className={styles.h4}>{name}</div>
               <p>{instrument}</p>
            </div>
         </div>
         <div className={styles.back}>
            <video ref={videoRef} src={video} muted autoPlay loop playsInline preload="auto" typeof="video/mp4" disablePictureInPicture >
               {/* <source src={video} typeof="video/mp4" /> */}
               {/* <track kind="captions"></track> */}
            </video>
            <div className={styles.text}>
               <div className={styles.h4}>{name}</div>
               <p>{instrument}</p>
            </div>
         </div>
      </div>
   );
};

export default TeamCard;
