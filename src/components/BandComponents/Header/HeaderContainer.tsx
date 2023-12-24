import BandNavList from "./BandNavList";

import { lyrics, pageLogos, tempLinks } from "./temp/headerData";

import Header from "../../../UI/Header/Header";

const HeaderContainer = () => {
  return <Header pageLogos={pageLogos} lyrics={lyrics} links={tempLinks} NavList={BandNavList} />;
};

export default HeaderContainer;
