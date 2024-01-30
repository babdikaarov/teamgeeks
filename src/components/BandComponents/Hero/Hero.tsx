import { getHeroData } from "../../../tempData/getHeroData";
import HeroTeamplate from "../../../UI/Hero/HeroTemplate";
import ReserveUsButton from "../../../UI/buttons/HeroButton";
import contacts from "../../../tempData/contacts.json";

const Hero = () => {
   return (
      <HeroTeamplate {...getHeroData.bandHero}>
         <ReserveUsButton whatsapp={contacts.bandNumber} />
      </HeroTeamplate>
   );
};

export default Hero;
