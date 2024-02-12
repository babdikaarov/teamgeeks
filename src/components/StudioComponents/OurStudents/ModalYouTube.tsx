// modules
import { createParameterString } from "../../../modules/createParametrString";
import { useModalCotroller } from "../../../modules/hooks/useModalCotroller";
// components
import close from "/icons/X.svg";
// styles
import styles from "./_modalYouTube.module.scss";

const ModalYouTube: React.FC<Prop.ModalYouTube> = ({ id, youTubeId, allIDS }) => {
   const { dialogRef, isOpen, handleClose } = useModalCotroller();
   const youtubeParams = {
      playlist: allIDS,
      loop: 1,
      rel: 0,
   };

   return (
      <dialog
         id={id}
         className={styles.modal}
         ref={dialogRef}
      >
         <img
            src={close}
            id="closeBtn"
            alt="close"
            className={styles.close}
            onClick={() => handleClose}
         />
         {isOpen && (
            <iframe
               width="100%"
               height="100%"
               src={`https://www.youtube-nocookie.com/embed/${youTubeId}?${createParameterString(youtubeParams)}`}
               title="YouTube video player"
               allowFullScreen
            ></iframe>
         )}
      </dialog>
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
   );
};

export default ModalYouTube;
