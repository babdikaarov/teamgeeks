import { FC, useState } from "react";
import styles from "./gallery/_galleryCollage.module.scss";
import Modal from "./modal/Modal";
import { GalleryCollageProps } from "./types";
import usePagination from "../../app/hooks/usePagination";

const GalleryCollage: FC<GalleryCollageProps> = ({ items }) => {
  const [indexImage, setIndexImage] = useState<number>(0);
  const { getVisibleItems, nextPage } = usePagination(8);
  const perPage = getVisibleItems(items);

  const handleOpen = (index: number) => {
    const modal = document.getElementById("modal") as HTMLDialogElement;
    setIndexImage(index);
    modal && modal.show();
  };

  return (
    <>
      <div className={styles.collage}>
        {perPage &&
          perPage.map((data, i) => (
            <div key={i} className={data && styles.collageItem + " " + styles[data.view]} onClick={() => handleOpen(i)}>
              <p>{i}</p>
              <img src={data?.src} alt={data?.alt} />
            </div>
          ))}
        <Modal images={perPage} index={indexImage} setIndexImage={setIndexImage} />
      </div>
      <button className={styles.paginationButton} onClick={nextPage}>
        Далее
      </button>
    </>
  );
};

export default GalleryCollage;
