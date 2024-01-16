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
      updateFavicon("/public/studioFav.svg");
    } else {
      document.title = "Cool Band";
      updateFavicon("/public/bandIcon.svg");
    }

    return () => {
      document.title = "Cool Band";
      updateFavicon("/public/bandIcon.svg");
    };
  }, [pathname]);
};

export default useTitle;
