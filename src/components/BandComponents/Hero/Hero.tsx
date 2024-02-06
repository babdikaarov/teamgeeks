import { getHeroData } from "../../../tempData/getHeroData";
import HeroTeamplate from "../../../UI/Hero/HeroTemplate";
import contacts from "../../../tempData/contacts.json";
import SharedButton from "../../../UI/buttons/SharedButton";

const Hero = () => {
   return (
      <HeroTeamplate {...getHeroData.bandHero}>
         <SharedButton
            whatsapp={contacts.bandNumber}
            classname="bandHeroButton"
            text="Заказать Cool Band"
         />
      </HeroTeamplate>
   );
};

export default Hero;
