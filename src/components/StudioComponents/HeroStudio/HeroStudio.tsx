import HeroStud from "../../../UI/Hero/HeroStudio/HeroStud";
import SignLessonButton from "../../../UI/Hero/HeroStudio/SignLessonButton";
import HeroTemplate from "../../../UI/Hero/HeroTemplate";
import "../../../scss/partials/coolStudio/_heroStudio.module.scss";
import { GetHeroStudio } from "./temp/getHeroStudio";

const HeroStudio = () => {
  // return <HeroStud {...GetHeroStudio} />;
  return (
    <HeroTemplate {...GetHeroStudio}>
      <h1></h1>
      <h6></h6>
      <SignLessonButton whatsapp={""} />
    </HeroTemplate>
  );
};
export default HeroStudio;
