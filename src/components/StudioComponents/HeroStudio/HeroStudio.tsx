import HeroStud from "../../../UI/Hero/HeroStudio/HeroStud";
import "../../../scss/partials/coolStudio/_heroStudio.module.scss";
import { GetHeroStudio } from "./temp/getHeroStudio";

const HeroStudio = () => {
   return <HeroStud {...GetHeroStudio} />;
};
export default HeroStudio;
