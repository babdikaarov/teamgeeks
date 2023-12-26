import Hero from "../../../UI/Hero/Hero";
import { getHeroData } from "./getHeroData";
const HeroContainer = () => {
   return (
      // <div className="container">
      <Hero {...getHeroData.bandHero} />
      // {/* </div> */}
   );
};

export default HeroContainer;
