import { useEffect, useRef } from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import HeroText from "./HeroText";
import styles from "./_hero.module.scss";

const HeroTemplate: React.FC<Prop.Hero.Props> = ({ video, text, children }) => {
   const videoRef = useRef<HTMLVideoElement>(null);

   useEffect(() => {
      const videoElement = videoRef.current;
      videoElement?.setAttribute("muted", "true");
      // videoElement?.setAttribute("muted", "");
      // const handleClick = (e: Event) => {
      //    e.preventDefault();
      //    e.stopPropagation();
      // };

      // const handleTouch = (e: Event) => {
      //    e.preventDefault();
      //    e.stopPropagation();
      // };

      // videoElement?.addEventListener("click", handleClick);
      // videoElement?.addEventListener("touchstart", handleTouch);
      // videoElement?.play();

      // return () => {
      //    videoElement?.removeEventListener("click", handleClick);
      //    videoElement?.removeEventListener("touchstart", handleTouch);
      // };
   }, []);

   return (
      <SectionWrapper className={styles.hero}>
         <video
            muted
            autoPlay
            loop
            playsInline
            ref={videoRef}
            src={video}
         >
            <track kind="captions"></track>
         </video>
         {text && (
            <HeroText
               header={text.header}
               className={styles.textPosition}
            />
         )}
         {children}
      </SectionWrapper>
   );
};

export default HeroTemplate;
