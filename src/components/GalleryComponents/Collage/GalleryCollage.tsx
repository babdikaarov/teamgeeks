import { useState } from "react";
import styles from "./_galleryCollage.module.scss";
import { GalleryCollageProps } from "../types";
import usePagination from "../../../modules/hooks/usePagination";
import { SlideImage } from "yet-another-react-lightbox";
import LightBox from "./LightBox";
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";
import { useLocation } from "react-router-dom";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
import { EBlockID } from "../../../types";

/*
 */
const GalleryCollage: React.FC<GalleryCollageProps> = ({ items }) => {
   /*
    */
   const [open, setOpen] = useState(false);
   const [index, setIndex] = useState(0);
   const { getVisibleItems, nextPage } = usePagination(8);
   const images = getVisibleItems(items);
   const { pathname } = useLocation();
   const onStudio = pathname.match("studio");
   const { refToogle } = useToggleActiveNavigation(onStudio ? EBlockID.GalleryStudio : EBlockID.Gallery);

   const handleOpen = (i: number) => {
      setOpen(true);
      setIndex(i);
   };
   // FIXME on API trafer convert logic to LightBox.tsx
   const modalImages: SlideImage[] = images
      .map((el) => (el ? { src: el.src } : null))
      .filter((el): el is SlideImage => el !== null);

   const lightBoxProps = {
      index,
      open,
      setOpen,
      setIndex,
      images: modalImages,
      nextPage,
   };

   return (
      <>
         <div
            className={styles.collage}
            ref={refToogle}
         >
            {images &&
               images.map((data, i) => (
                  <div
                     key={i}
                     className={data && styles.collageItem + " " + styles[data.view]}
                     onClick={() => handleOpen(i)}
                  >
                     <p>{i}</p>
                     <ImageLoader src={data?.src} />
                  </div>
               ))}

            <LightBox {...lightBoxProps} />
         </div>
         <button
            className={styles.paginationButton}
            onClick={nextPage}
         >
            Далее
         </button>
      </>
   );
};

export default GalleryCollage;
