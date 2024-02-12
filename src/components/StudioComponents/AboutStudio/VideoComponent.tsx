// modules
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getCoolStudio } from "../../../store/aboutStudioThunk";
// import { extractYouTubeVideoId } from "../../../../modules/extractAllYouTubeVideoID";
// styles
import styles from "./_videoComponent.module.scss";

const VideoComponent = () => {
   const dispatch = useAppDispatch();
   const coolStudioData = useAppSelector((state) => state.getCoolStudioVideo.data);

   useEffect(() => {
      dispatch(getCoolStudio());
   }, [dispatch]);

   if (!coolStudioData) {
      return <div>Loading...</div>;
   }
   // const videoId = extractYouTubeVideoId(coolStudioData.youtubeUrl);
   return (
      <div>
         <iframe
            className={styles.video}
            src={`https://www.youtube.com/embed/uy-nFAuzFf4`} //FIX_ME remove and uncomment below after backend
            // src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
         ></iframe>
      </div>
   );
};

export default VideoComponent;
