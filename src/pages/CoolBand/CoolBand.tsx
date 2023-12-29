import React from "react";
import CoolShowBand from "../../components/BandComponents/CoolShowBand/CoolShowBand.tsx";
import Gis2 from "../../components/BandComponents/Gis2/Gis2.tsx";
import OurTeam from "../../components/BandComponents/OurTeam/OurTeam.tsx";
import WhyUs from "../../components/BandComponents/WhyUs/WhyUs.tsx";
import OurClients from "../../components/BandComponents/OurClients/OurClients.tsx";
import Hero from "../../components/BandComponents/Hero/Hero.tsx";
import OurEvents from "../../components/BandComponents/OurEvents/OurEvents.tsx";
import Collaboration from "../../components/BandComponents/Collaboration/Collaboration.tsx";

const CoolBand = () => {
   return (
      <>
         <Hero />
         <CoolShowBand />
         <WhyUs />
         <OurEvents />
         <OurTeam />
         <Collaboration />
         <OurClients />
         <Gis2 />
      </>
   );
};

export default CoolBand;
