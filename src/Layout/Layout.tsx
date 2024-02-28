import MadeBy from "../UI/MadeBy/MadeBy.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Header from "../components/Header/Header.tsx";
import Hero from "../components/BandComponents/Hero/Hero.tsx";
import StudioHero from "../components/StudioComponents/Hero/Hero.tsx";
import { useLocation } from "react-router-dom";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
   const { pathname } = useLocation();
   const onStudio = pathname.match("studio");
   const onGallery = pathname.includes("gallery");
   return (
      <>
         <Header />
         <main>
            <Hero style={onGallery ? { display: "none" } : onStudio ? { display: "none" } : {}} />
            <StudioHero style={onGallery ? { display: "none" } : onStudio ? {} : { display: "none" }} />
            {children}
         </main>
         <Footer />
         <MadeBy />
      </>
   );
};

export default Layout;
