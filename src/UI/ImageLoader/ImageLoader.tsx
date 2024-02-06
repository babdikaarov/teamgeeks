import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

interface ImageLoaderProps {
   src?: string;
   bluer?: string;
}

const defaultValue = "LEHLk~WB2yk8pyo0adR*.7kCMdnj";

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, bluer = defaultValue }) => {
   const [loaded, setLoaded] = useState(false);

   useEffect(() => {
      if (!src) return;
      const img = new Image();
      img.onload = () => {
         setLoaded(true);
      };
      img.src = src;
   }, [src]);

   return (
      <>
         <div style={{ display: loaded ? "none" : "inline", width: "100%", height: "100%", borderRadius: "16px" }}>
            <Blurhash hash={bluer} width="100%" height="100%" resolutionX={32} resolutionY={32} punch={1} />
         </div>
         <img src={src} alt="" style={{ display: !loaded ? "none" : "inline" }} />
      </>
   );
};

export default ImageLoader;
