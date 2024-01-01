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
  images: (
    | {
        alt: string;
        src: string;
        view: string;
      }
    | undefined
  )[];
  i: number;
  setIndexImage: React.Dispatch<React.SetStateAction<number>>;
}

const Modal: FC<ModalProps> = ({ images, i, setIndexImage }) => {
  const modal = document.getElementById("modal") as HTMLDialogElement;

  const handleClose = () => {
    modal && modal.close();
  };

  const handleLeftButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (i == 0) {
      return;
    }
    setIndexImage(i - 1);
  };

  const handleRightButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (i >= images.length - 1) {
      return;
    }
    setIndexImage(i + 1);
    console.log("right");
  };

  const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    modal && modal.close();
  };

  return (
    <dialog className={styles.modal} id="modal" onClick={handleClose}>
      <div className={styles.modalContainer}>
        <button className={styles.modalButtonLeft} onClick={handleLeftButtonClick}>
          {arrowLeft}
        </button>
        <div
          className={(images[i]?.view === "protrait" ? styles.portrait : styles.landscape) + " " + styles.modalImage}
          onClick={handleImageClick}
        >
          <img src={images[i]?.src} alt={images[i]?.alt} />
        </div>
        <button className={styles.modalButtonRight} onClick={handleRightButtonClick}>
          {arrowRight}
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
