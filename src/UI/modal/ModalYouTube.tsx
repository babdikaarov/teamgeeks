import { createParameterString } from "../../modules/createParametrString";
import { useModalCotroller } from "../../modules/hooks/useModalCotroller";
import styles from "./_modalYouTube.module.scss";

interface ModalYouTubeProps {
   id: string;
   youTubeId: string | null;
   allIDS: (string | null)[];
}

const ModalYouTube: React.FC<ModalYouTubeProps> = ({ id, youTubeId, allIDS }) => {
   const { dialogRef } = useModalCotroller();
   const youtubeParams = {
      playlist: allIDS,
      loop: 1,
      rel: 0,
   };

   // FIXME bug if modal open students card is moveable and some card's modal losing its z-index

   return (
      <dialog id={id} className={styles.modal} ref={dialogRef}>
         <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube-nocookie.com/embed/${youTubeId}?${createParameterString(youtubeParams)}`}
            title="YouTube video player"
            allowFullScreen
         ></iframe>
      </dialog>
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
   );
};

export default ModalYouTube;
