import AboutStudio from "../../components/StudioComponents/AboutStudio/AboutStudio";
import Courses from "../../components/StudioComponents/Courses/Courses";
import HeroStudio from "../../components/StudioComponents/HeroStudio/HeroStudio";
import StudentsFeedback from "../../components/StudioComponents/StudentsFeedback/StudentsFeedback";
const CoolStudio = () => {
   return (
      <>
         <HeroStudio />
         <Courses />
         {/* <AboutStudio /> */}
         <StudentsFeedback />
      </>
   );
};

export default CoolStudio;
