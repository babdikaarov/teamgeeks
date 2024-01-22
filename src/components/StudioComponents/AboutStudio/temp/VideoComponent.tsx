import { getCoolStudioData } from "../../AboutStudio/temp/getCoolStudioData";
import styles from "../temp/_videoComponent.module.scss";

const VideoComponent = () => {
   return (
      <div>
         <iframe
            className={styles.video}
            src={`${getCoolStudioData.video.youtubeUrl}&controls=0&showinfo=0`}
            title="YouTube video player"
         ></iframe>
      </div>
   );
};

export default VideoComponent;
