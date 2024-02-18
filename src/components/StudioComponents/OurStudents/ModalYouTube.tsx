// modules
import { createParameterString } from "../../../modules/createParametrString";
import { useModalCotroller } from "../../../modules/hooks/useModalCotroller";
// components
import close from "/icons/X.svg";
// styles
import styles from "./_modalYouTube.module.scss";
import { useEffect, useRef } from "react";

const ModalYouTube: React.FC<Prop.ModalYouTube> = ({ id, youTubeId, allIDS }) => {
   const { dialogRef, isOpen, handleClose } = useModalCotroller();
   const ref = useRef<HTMLIFrameElement | null>(null);
   const youtubeParams = {
      playlist: allIDS,
      loop: 1,
      rel: 0,
      enablejsapi: 1,
   };

   useEffect(() => {
      isOpen && ref.current?.contentWindow?.postMessage('{"event":"command","func":"setVolume","args":[30]}', "*");
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

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
               ref={ref}
               width="100%"
               height="100%"
               src={`https://www.youtube-nocookie.com/embed/${youTubeId}?${createParameterString(youtubeParams)}`}
               title="YouTube video player"
               allowFullScreen
               allow="encrypted-media"
               sandbox="allow-scripts allow-same-origin allow-presentation"
            ></iframe>
         )}
      </dialog>
   );
};

export default ModalYouTube;
