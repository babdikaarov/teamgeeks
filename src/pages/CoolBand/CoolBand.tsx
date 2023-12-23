import CoolShowBand from "../../components/BandComponents/CoolShowBand/CoolShowBand.tsx";
import Gis2 from "../../components/BandComponents/Gis2/Gis2.tsx";
import HeaderContainer from "../../components/BandComponents/Header/HeaderContainer.tsx";
import OurTeam from "../../components/BandComponents/OurTeam/OurTeam.tsx";
import WhyUs from "../../components/BandComponents/WhyUs/WhyUs.tsx";
import OurClients from "../../components/BandComponents/OurClients/OurClients.tsx";

const CoolBand = () => {
   return (
      <>
         <div>
            <HeaderContainer />
            <CoolShowBand />
            <WhyUs />
            <OurTeam />
            <OurClients />
            <Gis2 />
         </div>
      </>
   );
};

export default CoolBand;
