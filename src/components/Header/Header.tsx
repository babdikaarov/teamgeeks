import { Suspense, lazy} from "react";
import lyrics from "./staticData.json";
import usePageLocation from "../../modules/hooks/usePageLocation";

const BandNavList = lazy(() => import("./pageNavigation/BandNavList"));
const StudioNavList = lazy(() => import("./pageNavigation/StudioNavList"));
const HeaderComponent = lazy(() => import("./HeaderComponent"));

const Header = () => {
   const {onBand} = usePageLocation()
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <HeaderComponent
            bandPage={onBand}
            lyrics={lyrics}
            NavList={onBand ? BandNavList : StudioNavList}
         />
      </Suspense>
   );
};

export default Header;
