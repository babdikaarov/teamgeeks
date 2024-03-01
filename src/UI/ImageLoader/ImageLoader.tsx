import React, { useState, Suspense, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import { isBlurhashValid } from "blurhash";
import styles from "./_imageLoader.module.scss";

interface ImageLoaderProps {
   src: string;
   bluer: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, bluer }) => {
   // const defaultBluer = "L03us9j[fQj[offQfQfQfQfQfQfQ";
   const [loaded, setLoaded] = useState(false);
   const [isDelaySet, setIsDelaySet] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setIsDelaySet(true);
      }, 100);
   }, []);

   if (!isBlurhashValid(bluer).result) return;
   return (
      <Suspense>
         <div className={styles.container}>
            <Blurhash hash={bluer} className={styles.div} data-delay={isDelaySet} />
            <img
               className={`${styles.image} ${loaded ? styles.loaded : ""}`}
               onLoad={() => setLoaded(true)}
               loading="lazy"
               src={src}
               alt="Poster About"
            />
         </div>
      </Suspense>
   );
};

export default ImageLoader;
