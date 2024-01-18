import { useState } from "react";
import play from "../../../../assets/coolstudio/Frame 427319234.png";
import { getCoolStudioData } from "../../AboutStudio/temp/getCoolStudioData";
import styles from "../temp/_videoComponent.module.scss";
import poster from "../../../../assets/coolStudio.png";

const VideoComponent = () => {
  const [videoPlayed, setVideoPlayed] = useState(false);

  const playVideo = () => {
    setVideoPlayed(true);
  };

  return (
    <div>
      {!videoPlayed && (
        <div className={styles.Image}>
          {/* FIX_ME сделано для билда */}
          <img className={styles.img} src={poster} alt="Your Image" />
          <button className={styles.play} onClick={playVideo}>
            <img src={play} alt="Play" />
          </button>
        </div>
      )}
      {videoPlayed && (
        <iframe
          className={styles.video}
          src={`${getCoolStudioData.video.youtubeUrl}&controls=0&showinfo=0`}
          title="YouTube video player"
        ></iframe>
      )}
    </div>
  );
};

export default VideoComponent;
