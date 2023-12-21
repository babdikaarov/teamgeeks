import Header from "../../../shared/widgets/header/Header";
import BandNavList from "../../../shared/UI/pageNavigation/BandNavList";
import { lyrics, pageLogos, tempLinks } from "../../../temp/headerData";

const HeaderContainer = () => {
   return <Header pageLogos={pageLogos} lyrics={lyrics} links={tempLinks} NavList={BandNavList} />;
};

export default HeaderContainer;
