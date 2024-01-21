import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useStudioPath = () => {
   const { pathname } = useLocation();
   const [isActive, setIsActive] = useState<boolean>(false);

   useEffect(() => {
      const studioPathRegex = /^\/studio($|\/.*|#.*)/;
      setIsActive(studioPathRegex.test(pathname));
   }, [pathname]);

   return isActive;
};

export default useStudioPath;
