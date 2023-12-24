import Footer from "../../../UI/Footer/Footer";
import { content, pageLogos } from "./temp/footerData";

const FooterContainer = () => {
   return (
      // <div className="container">
      <Footer content={content} pageLogos={pageLogos} />
      // </div>
   );
};

export default FooterContainer;
