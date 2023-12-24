import Hero from "../../../UI/Hero/Hero";
import { getHeroData } from "./temp/getHeroData";
const HeroContainer = () => {
  return <Hero {...getHeroData.bandHero} />;
};

export default HeroContainer;
