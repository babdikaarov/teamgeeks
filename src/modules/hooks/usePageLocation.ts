import { useLocation } from "react-router-dom";

const usePageLocation = () => {
   const location = useLocation();
   const { pathname } = location || {};
   const onBand = !pathname || !pathname.includes("studio");
   const onStudio = !!pathname && pathname.includes("studio");
   // console.log(onBand)
   // console.log(onStudio)
   return { onBand, onStudio };
};

export default usePageLocation;
