// modules
import { useEffect, useRef, useState  } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getCoolStudio } from "../../../store/aboutStudioThunk";
// import { extractYouTubeVideoId } from "../../../../modules/extractAllYouTubeVideoID";
// styles
import styles from "./_videoComponent.module.scss";






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
   // const videoId = extractYouTubeVideoId(coolStudioData.youtubeUrl);
   return (
      <div>
          <div onClick={handleUserPlay}></div>
         <iframe
         ref={videoRef}
            className={styles.video}
            src={`https://www.youtube.com/embed/uy-nFAuzFf4`} //FIX_ME remove and uncomment below after backend
            // src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            sandbox="allow-scripts allow-same-origin"
         ></iframe>
      </div>
   );
};

export default VideoComponent;
