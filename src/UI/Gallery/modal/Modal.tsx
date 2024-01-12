// import { MouseEvent, MouseEventHandler, useCallback, useEffect, useRef } from "react";
import styles from "../gallery/_modal.module.scss";
import { arrowLeft } from "./arrowLeft";
import { arrowRight } from "./arrowRight";
import useCollageModal from "../../../app/hooks/useCollageModal";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({ images, index, setIndexImage }) => {
  const { dialogRef, imageRef } = useCollageModal(index, images.length, setIndexImage);

  return (
    <dialog className={styles.modal} id="modal" ref={dialogRef}>
      <div className={styles.close} id="modalClose"></div>
      <button
        className={styles.modalButtonLeft}
        id="modalLeft"
        onClick={() => !(index == 0) && setIndexImage(index - 1)}
      >
        {arrowLeft}
      </button>
      <button
        className={styles.modalButtonRight}
        id="modalRight"
        onClick={() => !(index >= images.length - 1) && setIndexImage(index + 1)}
      >
        {arrowRight}
      </button>
      <div className={styles.modalContainer}>
        <div
          ref={imageRef}
          className={(images[index]?.view == "portrait" ? styles.portrait : styles.landscape) + " " + styles.modalImage}
        >
          <img src={images[index]?.src} alt={images[index]?.alt} />
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
