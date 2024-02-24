import { useLocation } from "react-router-dom";

const useStudioPath = () => {
   const { pathname } = useLocation();
   const bandPage = pathname.match("studio") ? false : true;
   const onStudio = pathname.match("studio");
   return !bandPage;
};

export default useStudioPath;
