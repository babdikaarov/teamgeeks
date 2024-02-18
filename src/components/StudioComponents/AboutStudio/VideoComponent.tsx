// modules
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
// import { extractYouTubeVideoId } from "../../../modules/extractAllYouTubeVideoID";
import { getCoolStudio } from "../../../store/aboutStudioThunk";
// styles
import styles from "./_videoComponent.module.scss";

const VideoComponent = () => {
   const dispatch = useAppDispatch();
   const coolStudioData = useAppSelector((state) => state.getCoolStudioVideo.data);
   const videoRef = useRef<HTMLIFrameElement | null>(null);
   const [userPlayedVideo] = useState(false);

   useEffect(() => {
      dispatch(getCoolStudio());
   }, [dispatch]);

   useEffect(() => {
      const handleVisibilityChange = (entries: IntersectionObserverEntry[]) => {
         const [entry] = entries;
         if (entry.isIntersecting) {
            userPlayedVideo &&
               videoRef.current?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
               videoRef.current?.contentWindow?.postMessage('{"event":"command","func":"setVolume","args":[30]}', "*");
         } else {
            videoRef.current?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
         }
      };

      const observer = new IntersectionObserver(handleVisibilityChange, {
         threshold: 0.5,
      });

      if (videoRef.current) {
         observer.observe(videoRef.current);
      }

      return () => {
         observer.disconnect();
      };
   }, [userPlayedVideo]);

   if (!coolStudioData) {
      return <div>Loading...</div>;
   }

   // const videoId = extractYouTubeVideoId(coolStudioData.youtubeUrl);

   return (
      <div>
         <iframe
            ref={videoRef}
            className={styles.video}
            src={`https://www.youtube.com/embed/uy-nFAuzFf4?enablejsapi=1`} //FIX_ME remove and uncomment below after backend
            // src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            sandbox="allow-scripts allow-same-origin allow-presentation"
         ></iframe>
      </div>
   );
};

export default VideoComponent;
