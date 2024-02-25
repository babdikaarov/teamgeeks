import React, { useState, useEffect, Suspense } from "react";
import { Blurhash } from "react-blurhash";
import { isBlurhashValid } from "blurhash";
import styles from "./_imageLoader.module.scss";

interface ImageLoaderProps {
   src: string;
   bluer: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, bluer }) => {
   const defaultBluer = "L03us9j[fQj[offQfQfQfQfQfQfQ";
   const [loaded, setLoaded] = useState(false);
   // const [imageSrc, setImageSrc ] = useState(src)

   useEffect(() => {
      // setImageSrc(src)
      if (src && bluer) {
         const img = new Image();
         img.onload = () => {
            setLoaded(true);
         };
         img.src = src;
      }

      // return ()=>{
      //    setLoaded(false)
      // }
   }, [src, bluer]);

   return (
      <>
         <Blurhash
            hash={isBlurhashValid(bluer).result ? bluer : defaultBluer}
            className={styles.div}
            resolutionX={32}
            resolutionY={32}
            punch={1}
         />
         <Suspense>
            <img
               className={`${styles.image} ${loaded ? styles.loaded : ""}`}
               // src={imageSrc}
               src={src}
               alt="Poster About"
            />
         </Suspense>
      </>
   );
};

export default ImageLoader;
