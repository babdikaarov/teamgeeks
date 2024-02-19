import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import { isBlurhashValid } from "blurhash";
import styles from "./_imageLoader.module.scss";

interface ImageLoaderProps {
   src?: string;
   bluer?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, bluer = "" }) => {
   const [hash, setHash] = useState<string | null>(null);
   const [loaded, setLoaded] = useState(false);

   useEffect(() => {
      if (isBlurhashValid(bluer).result) {
         setHash(bluer);
      }
      if (!src) return;
      const img = new Image();
      img.onload = () => {
         setLoaded(true);
      };
      img.src = src;
   }, [src, bluer]);

   return (
      <>
         {hash && (
            <Blurhash
               hash={hash}
               className={styles.div}
               resolutionX={32}
               resolutionY={32}
               punch={1}
            />
         )}

         <img
            className={`${styles.image} ${loaded ? styles.loaded : ""}`}
            src={src}
            alt="Poster About"
         />
      </>
   );
};

export default ImageLoader;
