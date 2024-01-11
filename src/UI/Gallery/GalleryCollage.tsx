import { FC, useState } from "react";
import styles from "./gallery/_galleryCollage.module.scss";
import Modal from "./modal/Modal";
import { GalleryCollageProps } from "./types";

const GalleryCollage: FC<GalleryCollageProps> = ({ items }) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  // const startItemIndex = (currentPage - 1) * itemsPerPage;
  const startItemIndex = 0;
  const endItemIndex = currentPage * itemsPerPage;
  const perPage = items.slice(startItemIndex, endItemIndex);
  const [indexImage, setIndexImage] = useState<number>(0);

  const handleOpen = (index: number) => {
    const modal = document.getElementById("modal") as HTMLDialogElement;
    //  console.log(index);
    setIndexImage(index);
    modal && modal.showModal();
  };

  const handleClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className={styles.collage}>
        {perPage &&
          perPage.map((data, i) => (
            <div key={i} className={data && styles.collageItem + " " + styles[data.view]} onClick={() => handleOpen(i)}>
              <img src={data?.src} alt={data?.alt} />
            </div>
          ))}
        <Modal images={items} i={indexImage} setIndexImage={setIndexImage} />
      </div>
      <button className={styles.paginationButton} onClick={handleClick}>
        Далее
      </button>
    </>
  );
};

export default GalleryCollage;
