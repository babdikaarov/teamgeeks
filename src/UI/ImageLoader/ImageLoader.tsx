import { useState, useEffect } from "react"
import { Blurhash } from "react-blurhash"

const ImageLoader = ({ src }) => {
   const[loaded, setLoaded] = useState(false)
   useEffect(() => {
      const img = new Image();
      img.onload = () => {
         setLoaded(true);
      };
      img.src = src;
   }, [src]);

  return (
    <>
      <div style={{display: loaded ? "none" : "inline"}}>
          <Blurhash
            hash="LEHLk~WB2yk8pyo0adR*.7kCMdnj"
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
      </div>
      <img
          src={src}
          alt=""
          style={{display: !loaded ? "none" : "inline"}}
      />
    </>
  )
}

export default ImageLoader