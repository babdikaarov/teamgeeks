import { lyrics, pageLogos, tempLinks } from "./temp/headerData";
import BandNavList from "../../../UI/Header/pageNavigation/BandNavList";
import Header from "../../../UI/Header/Header";

const HeaderContainer = () => {
  return <Header pageLogos={pageLogos} lyrics={lyrics} links={tempLinks} NavList={BandNavList} />;
};

export default HeaderContainer;
