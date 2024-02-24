import { useLocation } from "react-router-dom";

const usePageLocation = () => {
   const { pathname } = useLocation();
   const onBand = !pathname.match("studio");
   const onStudio = pathname.match("studio");
   return { onBand, onStudio };
};

export default usePageLocation;
