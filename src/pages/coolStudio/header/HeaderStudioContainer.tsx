import Header from "../../../shared/widgets/header/Header";
import StudioNavList from "../../../shared/UI/pageNavigation/StudioNavList";
import { lyrics, pageLogos, tempLinks } from "../../../temp/headerData";

const HeaderStudioContainer = () => {
   return <Header pageLogos={pageLogos} lyrics={lyrics} links={tempLinks} NavList={StudioNavList} />;
};

export default HeaderStudioContainer;
