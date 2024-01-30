import { getHeroData } from "../../../tempData/getHeroData";
import HeroTemplate from "../../../UI/Hero/HeroTemplate";
import StudioHeroButton from "../../../UI/buttons/StudioHeroButton";
import contacts from "../../../tempData/contacts.json";
const Hero = () => {
   return (
      <HeroTemplate {...getHeroData.studioHero}>
         <StudioHeroButton whatsapp={contacts.studioNumber} />
      </HeroTemplate>
   );
};

export default Hero;
