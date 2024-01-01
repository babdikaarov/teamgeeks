import { FC, useState } from "react";
import styles from "../../scss/partials/ui/gallery/_galleryCollage.module.scss";
import Modal from "./modal/Modal";

type Item = {
   alt: string;
   src: string;
   view: string;
}[];
interface GalleryCollageProps {
   items: Item | undefined[];
}

const GalleryCollage: FC<GalleryCollageProps> = ({ items }) => {
   const [indexImage, setIndexImage] = useState<number>(Number);
   const modal = document.getElementById("modal") as HTMLDialogElement;

   const handleOpen = (index: number) => {
      setIndexImage(index);
      modal && modal.showModal();
   };

   return (
      <div className={styles.collage}>
         {items &&
            items.map((data, i) => (
               <div
                  key={i}
                  className={data && styles.collageItem + " " + styles[data.view]}
                  onClick={() => handleOpen(i)}
               >
                  <p>{i}</p>
                  <img src={data?.src} alt={data?.alt} />
               </div>
            ))}
         <Modal images={items} index={indexImage} />
      </div>
   );
};

export default GalleryCollage;
