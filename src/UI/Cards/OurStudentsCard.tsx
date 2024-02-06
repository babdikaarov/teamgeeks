import { useState } from "react";
import { useYouTubeData } from "../../modules/hooks/useYouTubeData";
import styles from "./cards/_ourStudentsCard.module.scss";
import icon from "../../assets/icons/play.svg";
import ModalYouTube from "../modal/ModalYouTube";
import { useModalCotroller } from "../../modules/hooks/useModalCotroller";

interface OurStudentsCardProps {
   url: string;
   addToID: number;
   allIDS: (string | null)[];
}

const OurStudentsCard: React.FC<OurStudentsCardProps> = ({ url, addToID, allIDS }) => {
   const [imageLoaded, setImageLoaded] = useState(false);
   const youtubeUrl = url;
   const { id, title, thumbnail } = useYouTubeData(youtubeUrl);

   const modalID = `studentModal${addToID}}`;
   const { openModal } = useModalCotroller();
   return (
      <div
         className={styles.StudentCard}
         onClick={() => openModal(modalID)}
      >
         <div>
            {!imageLoaded && <div className={styles.loadingBox}></div>}
            <img
               src={thumbnail}
               alt="thumbnail"
               className={styles.thumbnail}
               onLoad={() => setImageLoaded(true)}
               style={{ opacity: imageLoaded ? 1 : 0 }}
            />
         </div>
         <span className={styles.icon}>
            <img
               src={icon}
               alt="play"
            />
         </span>
         <h6>{title}</h6>
         <ModalYouTube
            id={modalID}
            youTubeId={id}
            allIDS={allIDS}
         />
      </div>
   );
};

export default OurStudentsCard;
