import About from "../../components/BandComponents/About/AboutBand.tsx";
import Collaboration from "../../components/BandComponents/Collaboration/Collaboration.tsx";
import ContactUs from "../../components/BandComponents/ContactUS/ContactUs.tsx";
// import Hero from "../../components/BandComponents/Hero/Hero.tsx";
import OurClients from "../../components/BandComponents/OurClients/OurClients.tsx";
import OurEvents from "../../components/BandComponents/OurEvents/OurEvents.tsx";
import OurTeam from "../../components/BandComponents/OurTeam/OurTeam.tsx";
import WhyUs from "../../components/BandComponents/WhyUs/WhyUs.tsx";

const CoolBand = () => {
   return (
      <>
         {/* <Hero /> */}
         <About />
         <WhyUs />
         <OurEvents />
         <OurTeam />
         <Collaboration />
         <OurClients />
         <ContactUs />
      </>
   );
};

export default CoolBand;
