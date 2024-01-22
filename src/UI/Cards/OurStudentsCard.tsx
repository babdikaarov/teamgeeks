import { useYouTubeData } from "../../modules/getYoutubeData";
import styles from "./cards/_ourStudentsCard.module.scss";
import icon from "../../assets/icons/play.svg";

interface OurStudentsCardProps {
   url: string;
}

const OurStudentsCard: React.FC<OurStudentsCardProps> = ({ url }) => {
   const youtubeUrl = url;

   const { title, thumbnail } = useYouTubeData(youtubeUrl);
   // FIX_ME make modal window to play a video
   return (
      <div className={styles.StudentCard}>
         <div>
            <img src={thumbnail} alt="thumbnail" className={styles.thumbnail} />
         </div>
         <span className={styles.icon}>
            <img src={icon} alt="play" />
         </span>

         <h6>{title}</h6>
      </div>
   );
};

export default OurStudentsCard;
