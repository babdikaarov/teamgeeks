import HeroTemplate from "../../../UI/Hero/HeroTemplate";
import SignLesson from "../../../UI/Hero/SignLessonButton";
import "../../../UI/Hero/_hero.module.scss";
import { getHeroData } from "../../../components/BandComponents/Hero/temp/getHeroData";
import HeroText from "./HeroText";

const HeroStudio = () => {
   return (
      <HeroTemplate {...getHeroData.studioHero}>
         <HeroText header="Откройте двери в мир музыки с Coolstudio" />
         <SignLesson whatsapp={getHeroData.bandHero.contacts} />
      </HeroTemplate>
   );
};
export default HeroStudio;
