import { FC, useState } from "react";
import styles from "./gallery/_galleryCollage.module.scss";
import Modal from "./modal/Modal";
import { GalleryCollageProps } from "./types";
import usePagination from "../../modules/hooks/usePagination";
import { useModalCotroller } from "../../modules/hooks/useModalCotroller";

const GalleryCollage: FC<GalleryCollageProps> = ({ items }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
   const [indexImage, setIndexImage] = useState<number>(0);
   const { getVisibleItems, nextPage } = usePagination(8);
   const perPage = getVisibleItems(items);
   const { openModal } = useModalCotroller();
   const modalID = "collageModal";
   const handleOpen = (index: number) => {
      setIndexImage(index);
      openModal(modalID);
   };

   return (
      <>
         <div className={styles.collage}>
            {perPage &&
               perPage.map((data, i) => (
                  <div
                     key={i}
                     className={data && styles.collageItem + " " + styles[data.view]}
                     onClick={() => handleOpen(i)}
                  >
                     <p>{i}</p>
                     {!imageLoaded && (
                        <div className={styles.loadingBox}>
                        </div>
                     )}
                     <img  
                        src={data?.src} alt={data?.alt}
                        onLoad={() => setImageLoaded(true)}
                        style={{ opacity: imageLoaded ? 1 : 0 }}
                     />
                  </div>
               ))}
            <Modal
               modalId={modalID}
               images={perPage}
               index={indexImage}
               setIndexImage={setIndexImage}
               nextPage={nextPage}
            />
         </div>
         <button className={styles.paginationButton} onClick={nextPage}>
            Далее
         </button>
      </>
   );
};

export default GalleryCollage;
