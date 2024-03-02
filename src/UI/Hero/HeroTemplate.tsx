import { useEffect, useRef } from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import HeroText from "./HeroText";
import styles from "./_hero.module.scss";

const HeroTemplate: React.FC<Prop.Hero.Props> = ({ video, text, children, ...props }) => {
   const videoRef = useRef<HTMLVideoElement>(null);

   useEffect(() => {
      const videoElement = videoRef.current;
      if (!videoElement)return
      videoElement.volume = 0;
      videoElement.setAttribute("muted", "true");
      videoElement.setAttribute("muted", "");
      // videoElement.onpause  = () => (videoElement.play());
      // videoElement.play()
      // console.log(videoElement.play());
      // if (videoElement) {
      //    videoElement.oncanplaythrough = () => {
      //      videoElement.play();
      //    };
      //  }
      // const handleClick = (e: Event) => {
      //    e.preventDefault();
      //    e.stopPropagation();
      //    videoElement?.play();
      // };

      // const handleTouch = (e: Event) => {
      //    e.preventDefault();
      //    e.stopPropagation();
      //    videoElement?.play();
      // };

      // const handleWheel= (e: Event) => {
      //    e.preventDefault();
      //    e.stopPropagation();
      //    console.log(e)
      // }

      // videoElement?.addEventListener("click", handleClick);
      // videoElement?.addEventListener("touchstart", handleTouch);
      // videoElement?.addEventListener("scroll", handleWheel);

      // return () => {
      //    videoElement?.removeEventListener("click", handleClick);
      //    videoElement?.removeEventListener("touchstart", handleTouch);
      // };
   }, [videoRef]);

   return (
      <SectionWrapper className={styles.hero} {...props}>
         <video ref={videoRef} src={video} typeof="video/mp4"  loop  preload="metadata" autoPlay={true} muted={true} playsInline={true}  >
            {/* <track kind="captions"></track> */}
            {/* <source src={video} typeof="video/mp4" /> */}
         </video>
         {text && <HeroText header={text.header} paragraph={text.paragraph} className={styles.textPosition} />}
         {children}
      </SectionWrapper>
   );
};

export default HeroTemplate;
