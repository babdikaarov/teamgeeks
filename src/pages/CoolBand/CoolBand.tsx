import CoolShowBand from "../../components/BandComponents/CoolShowBand/CoolShowBand.tsx";
import Gis2 from "../../components/BandComponents/Gis2/Gis2.tsx";
import OurTeam from "../../components/BandComponents/OurTeam/OurTeam.tsx";
import WhyUs from "../../components/BandComponents/WhyUs/WhyUs.tsx";
import OurClients from "../../components/BandComponents/OurClients/OurClients.tsx";
import OurEvents from "../../components/BandComponents/OurEvents/OurEvents.tsx";
import Collaboration from "../../components/BandComponents/Collaboration/Collaboration.tsx";
import Hero from "../../components/BandComponents/Hero/Hero.tsx";
import styles from "../../scss/partials/coolBand/_gis2.module.scss";

const CoolBand = () => {
   return (
      <>
         <div>
            <Hero />
            <CoolShowBand />
            <WhyUs />
            <OurEvents />
            <OurTeam />
            <Collaboration/>
            <OurClients />
            <Gis2 callToUs={"Связаться с нами"}
                  music={"Не теряй связь с музыкой!"}
                  toBook={"Чтобы забронировать выступление Coolshowband" +
                     " отправьте нам  сообщение на WhatsApp. Мы свяжемся" +
                     " с вами в ближайшее время и ответим на все интересующие вас вопросы"}
                  btn={<a href="tel:996755608908" className={`${styles.btnCall}`}>Связаться с нами</a>}
            />
         </div>
      </>
   );
};

export default CoolBand;
