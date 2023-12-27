import CoolShowBand from "../../components/BandComponents/CoolShowBand/CoolShowBand.tsx";
import Gis2 from "../../components/BandComponents/Gis2/Gis2.tsx";
import HeaderContainer from "../../components/BandComponents/Header/HeaderContainer.tsx";
import OurTeam from "../../components/BandComponents/OurTeam/OurTeam.tsx";
import WhyUs from "../../components/BandComponents/WhyUs/WhyUs.tsx";
import OurClients from "../../components/BandComponents/OurClients/OurClients.tsx";
import FooterContainer from "../../components/BandComponents/Footer/FooterContainer.tsx";
import HeroContainer from "../../components/BandComponents/Hero/HeroContainer.tsx";
import OurEvents from "../../components/BandComponents/OurEvents/OurEvents.tsx";
import Collaboration from "../../components/BandComponents/Collaboration/Collaboration.tsx";

const CoolBand = () => {
   return (
      <>
         <div style={{ marginTop: "110px" }}>
            <HeaderContainer />
            <HeroContainer />
            <CoolShowBand />
            <WhyUs />
            <OurEvents />
            <OurTeam />
            <Collaboration/>
            <OurClients />
            <Gis2 />
            <FooterContainer />
         </div>
      </>
   );
};

export default CoolBand;
