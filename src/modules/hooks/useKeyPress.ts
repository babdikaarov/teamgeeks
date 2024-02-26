import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useKeyPress = (targetKey: string) => {
   const navigate = useNavigate();
   const [keyPressed, setKeyPressed] = useState(false);
   const upHandler = ({ key }: { key: string }) => {
      if (key === targetKey) {
         const path = keyPressed ? "/gallery" : "/studio/gallery";
         setKeyPressed(!keyPressed);
         navigate(path);
      }
   };
   useEffect(() => {
      window.addEventListener("keyup", upHandler);
      return () => {
         window.removeEventListener("keyup", upHandler);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [keyPressed]);
};

export default useKeyPress;
