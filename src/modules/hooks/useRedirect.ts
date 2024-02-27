import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useRouterRedirect = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const pathname = location.pathname;

   useEffect(() => {
      if (pathname === "/gallery") {
         navigate("/gallery");
      } else if (pathname.startsWith("/gallery/")) {
         const lastSegment = pathname.split("/").pop();
         if (!lastSegment) return;
         if (!isNaN(parseInt(lastSegment)) && /^-?\d+$/.test(lastSegment)) {
            const number = parseInt(lastSegment, 10);
            console.log(number);
         } else {
            navigate(`/gallery`);
         }
      } else if (pathname.startsWith("/gallery") && !pathname.endsWith("/gallery")) {
         navigate("/gallery");
      } else if (pathname.startsWith("/studio") && !pathname.startsWith("/studio/gallery")) {
         navigate("/studio");
      } else if (pathname.startsWith("/studio/gallery")) {
         const lastSegment = pathname.split("/").pop();
         if (!lastSegment) return;
         if (!isNaN(parseInt(lastSegment)) && /^-?\d+$/.test(lastSegment)) {
            const number = parseInt(lastSegment, 10);
            console.log(number);
         } else {
            navigate("/studio/gallery");
         }
      } else {
         navigate("/");
      }
   }, [navigate, pathname]);

   return null;
};

export default useRouterRedirect;
