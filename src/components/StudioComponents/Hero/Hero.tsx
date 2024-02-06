import { getHeroData } from "../../../tempData/getHeroData";
import HeroTemplate from "../../../UI/Hero/HeroTemplate";
import SharedButton from "../../../UI/buttons/SharedButton";
import contacts from "../../../tempData/contacts.json";


const Hero = () => {
   return (
      <HeroTemplate {...getHeroData.studioHero}>
         <SharedButton whatsapp={contacts.studioNumber} classname="studioHeroButton" text="Записаться на пробный урок"/>
      </HeroTemplate>
   );
};


export default Hero;