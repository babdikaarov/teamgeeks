import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { extractYouTubeVideoId } from "../../../../modules/extractAllYouTubeVideoID";
import { getCoolStudio } from "../../../../store/aboutStudioThunk";
import styles from "../temp/_videoComponent.module.scss";

const VideoComponent = () => {
   const dispatch = useAppDispatch();
   const coolStudioData = useAppSelector((state) => state.getCoolStudioVideo.data);

   useEffect(() => {
      dispatch(getCoolStudio());
   }, [dispatch]);

   if (!coolStudioData) {
      return <div>Loading...</div>;
   }
   const videoId = extractYouTubeVideoId(coolStudioData.youtubeUrl);

   return (
      <div>
         <iframe
            className={styles.video}
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
         ></iframe>
      </div>
   );
};

export default VideoComponent;
