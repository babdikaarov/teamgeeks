// modules
import { useState } from "react";
import { SlideImage } from "yet-another-react-lightbox";
import usePagination from "../../../modules/hooks/usePagination";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
// components
import LightBox from "./LightBox";
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";
// styles
import styles from "./_galleryCollage.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";
import usePageLocation from "../../../modules/hooks/usePageLocation";

interface Props {
   items: Slice.IGetBandImages[];
}

const GalleryCollage: React.FC<Props> = ({ items }) => {
   const [open, setOpen] = useState(false);
   const [index, setIndex] = useState(0);
   const { getVisibleItems, nextPage } = usePagination(8);
   const images = getVisibleItems(items);
   const { onStudio } = usePageLocation();
   const { refToogle } = useToggleActiveNavigation(onStudio ? EBlockID.GALLERYSTUDIO : EBlockID.GALLERY);

   const handleOpen = (i: number) => {
      setOpen(true);
      setIndex(i);
   };

   const modalImages: SlideImage[] = images
      .map((el) => (el ? { src: el.originalImage } : null))
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
                     className={`${data && styles.collageItem} ${styles[data.orientation]}`}
                     onClick={() => handleOpen(i)}
                  >
                     <ImageLoader
                        src={data.image}
                        bluer={data.bluer}
                     />
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
