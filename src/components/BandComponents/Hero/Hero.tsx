import { getHeroData } from "../../../tempData/getHeroData";
import HeroTeamplate from "../../../UI/Hero/HeroTemplate";
import ReserveUsButton from "../../../UI/buttons/ReserveUsButton";

const Hero = () => {
  return (
    <HeroTeamplate {...getHeroData.bandHero}>
      <ReserveUsButton whatsapp={getHeroData.bandHero.contacts} />
    </HeroTeamplate>
  );
};

export default Hero;
