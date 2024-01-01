// import React from "react";
import { FC } from "react";
import styles from "../../../scss/partials/ui/gallery/_modal.module.scss";
import { arrowLeft } from "./arrowLeft";
import { arrowRight } from "./arrowRight";

// interface GalleryModalProps {
//   setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
//   setIndex: React.Dispatch<React.SetStateAction<number>>;
//   showOverlay: boolean;
//   index: number;
//   imageList: number[];
// }
interface ModalProps {
   images?:
      | {
           alt: string;
           src: string;
           view: string;
        }[]
      | undefined[];
   index: number;
}

const Modal: FC<ModalProps> = ({ images, index }) => {
   // const modal = document.getElementById("modal") as HTMLDialogElement;
   const image = images && images[index];

   const handleClose = () => {
      console.log("closed");
   };

   const handleLeftButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      console.log("left");
   };

   const handleRightButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      console.log("right");
   };

   const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();

      console.log("image");
   };

   return (
      <dialog className={styles.modal} id="modal">
         {/* <button id="close-modal" onClick={() => console.log("close")}></button> */}
         <div className={styles.modalContainer} onClick={handleClose}>
            <button
               className={styles.modalButtonLeft}
               // onClick={() => (images && images?.length < index ? console.log(images?.length + " " + index) : " more")}
               onClick={handleLeftButtonClick}
            >
               {arrowLeft}
            </button>
            <div className={image && styles[image.view] + styles.modalImage} onClick={handleImageClick}>
               <img src={image?.src} alt={image?.alt} />
            </div>
            <button className={styles.modalButtonRight} onClick={handleRightButtonClick}>
               {arrowRight}
            </button>
         </div>
      </dialog>
   );
};

export default Modal;
