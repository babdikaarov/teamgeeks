import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTitle = () => {
   const { pathname } = useLocation();
   const studioPath = /^\/studio(?:\/.*)?$/;
   const updateFavicon = (faviconPath: string) => {
      const link = document.querySelector('link[rel="icon"]') || document.createElement("link");
      link.setAttribute("href", faviconPath);
   };
   useEffect(() => {
      if (pathname.match(studioPath)) {
         document.title = "Cool Studio";
         updateFavicon("/studioFav.svg");
      } else {
         document.title = "Cool Band";
         updateFavicon("/bandIcon.svg");
      }

      return () => {
         document.title = "Cool Band";
         updateFavicon("/bandIcon.svg");
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [pathname]);
};

export default useTitle;
