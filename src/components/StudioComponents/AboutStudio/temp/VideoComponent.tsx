import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { extractYouTubeVideoId } from "../../../../modules/extractAllYouTubeVideoID";
import { getCoolStudio } from "../../../../store/aboutStudioThunk";
import styles from "../temp/_videoComponent.module.scss";

const VideoComponent = () => {
   const dispatch = useAppDispatch();
   const coolStudioData = useAppSelector((state) => state.getCoolStudioVideo.data);
   const videoRef = useRef<HTMLIFrameElement | null>(null);
   const [userPlayedVideo, setUserPlayedVideo] = useState(false);

   useEffect(() => {
      dispatch(getCoolStudio());
   }, [dispatch]);

   useEffect(() => {
      const handleVisibilityChange = (entries: IntersectionObserverEntry[]) => {
         const [entry] = entries;

         // Check if the video is in the viewport
         if (entry.isIntersecting) {
            // Only play video if the user has explicitly played it
            if (userPlayedVideo) {
               videoRef.current?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
            }
         } else {
            // Pause video when out of viewport
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

   const handleUserPlay = () => {
      setUserPlayedVideo(true);
      videoRef.current?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
   };

   if (!coolStudioData) {
      return <div>Loading...</div>;
   }

   const videoId = extractYouTubeVideoId(coolStudioData.youtubeUrl);

   return (
      <div>
         <div onClick={handleUserPlay}></div>
         <iframe
            ref={videoRef}
            className={styles.video}
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            sandbox="allow-scripts allow-same-origin"
         ></iframe>
      </div>
   );
};

export default VideoComponent;
