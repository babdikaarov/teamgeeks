import { getHeroData } from "./getHeroData";
import HeroTemplate from "../../../UI/Hero/HeroTemplate";
import StudioHeroButton from "../../../UI/buttons/StudioHeroButton";

const Hero = () => {
  return (
    <HeroTemplate {...getHeroData.studioHero}>
      <StudioHeroButton whatsapp={getHeroData.studioHero.contacts} />
    </HeroTemplate>
  );
};

export default Hero;
