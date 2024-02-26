import React, { useState, Suspense } from "react";
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
 
   if(!isBlurhashValid(bluer).result) return



   return (
         <Suspense>
            <Blurhash
               hash={bluer}
               className={styles.div}
               resolutionX={32}
               resolutionY={32}
               punch={1}
            />
            <img
               className={`${styles.image} ${loaded ? styles.loaded : ""}`}
               onLoad={() => setLoaded(true)}
               loading="lazy"
               src={src}
               alt="Poster About"
            />
         </Suspense>
   );
};

export default ImageLoader;
