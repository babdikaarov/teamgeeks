import { FC, useState } from "react";
import styles from "./gallery/_galleryCollage.module.scss";
import Modal from "./modal/Modal";

type Item = {
   alt: string;
   src: string;
   view: string;
};
interface GalleryCollageProps {
   items: (Item | undefined)[];
}

const GalleryCollage: FC<GalleryCollageProps> = ({ items }) => {
   const [indexImage, setIndexImage] = useState<number>(0);

   const handleOpen = (index: number) => {
      const modal = document.getElementById("modal") as HTMLDialogElement;
      //  console.log(index);
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
         <Modal images={items} i={indexImage} setIndexImage={setIndexImage} />
      </div>
   );
};

export default GalleryCollage;
