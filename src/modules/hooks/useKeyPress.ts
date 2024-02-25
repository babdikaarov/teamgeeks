import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useKeyPress = (targetKey: string) => {
   const navigate = useNavigate();
   const [keyPressed, setKeyPressed] = useState(false);
   const upHandler = ({ key }: { key: string }) => {
      if (key === targetKey) {
         setKeyPressed((prev) => !prev);
      }
   };
   useEffect(() => {
      window.addEventListener("keyup", upHandler);
      const path = keyPressed ? "/gallery" : "/studio/gallery";
      navigate(path);
      return () => {
         window.removeEventListener("keyup", upHandler);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [keyPressed]);
};

export default useKeyPress;
