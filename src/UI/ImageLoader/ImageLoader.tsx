import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

interface ImageLoaderProps {
   src?: string;
   bluer?: string;
}

const defaultValue = "LEHLk~WB2yk8pyo0adR*.7kCMdnj";

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, bluer = defaultValue }) => {
   const [loaded, setLoaded] = useState(false);
   if (src == "http://209.38.228.54:8080/api/about_us_band/image/1") {
      console.log(bluer);
   }
   useEffect(() => {
      if (!src) return;
      const img = new Image();
      img.onload = () => {
         setLoaded(true);
      };
      img.src = src;
   }, [src]);

   return !loaded ? (
      <Blurhash
         // hash={"UUOf.IVs?^W;IUofozRjc@o}H?aK9ZR*nhWB"}
         hash={bluer.length < 14 ? defaultValue : bluer}
         width="100%"
         height="100%"
         resolutionX={32}
         resolutionY={32}
         punch={1}
      />
   ) : (
      <img
         src={src}
         alt="Poster About"
         style={{ display: "block", objectFit: "cover", width: "100%", height: "100%" }}
      />
   );
};

export default ImageLoader;
