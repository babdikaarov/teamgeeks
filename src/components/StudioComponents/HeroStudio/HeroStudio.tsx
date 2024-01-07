import HeroTemplate from "../../../UI/Hero/HeroTemplate";
import SignLesson from "../../../UI/Hero/SignLessonButton";
import { getHeroData } from "../../../components/BandComponents/Hero/temp/getHeroData";
import "../../../UI/Hero/_hero.module.scss";
import HeroText from "./HeroText";

const HeroStudio = () => {
   return (
      <HeroTemplate {...getHeroData.studioHero}>
         <HeroText
            header="Откройте двери в мир музыки с Coolstudio"
            paragraph="Очарование кавербэнда, магия танцевального шоу, творчество в студии — воплощаем вашу музыкальную мечту!"
         />
         <SignLesson whatsapp={getHeroData.bandHero.contacts} />
      </HeroTemplate>
   );
};
export default HeroStudio;
