import { getHeroData } from "./temp/getHeroData";
import HeroTeamplate from "../../../UI/Hero/HeroTemplate";
import ReserveUsButton from "../../../UI/Hero/ReserveUsButton";

const Hero = () => {
  return (
    <HeroTeamplate {...getHeroData.bandHero}>
      <ReserveUsButton whatsapp={getHeroData.bandHero.contacts} />
    </HeroTeamplate>
  );
};

export default Hero;
// <ReserveUsButton whatsapp={contacts} />;
