import AboutStudio from "../../components/StudioComponents/AboutStudio/AboutStudio";
import Concert from "../../components/StudioComponents/Concerts/Concert.tsx";
import ContactUsStudio from "../../components/StudioComponents/ContactUS/ContactUsStudio.tsx";
import Courses from "../../components/StudioComponents/Courses/Courses.tsx";
import OurStudents from "../../components/StudioComponents/OurStudents/OurStudents.tsx";
import StudentsFeedback from "../../components/StudioComponents/StudentsFeedback/StudentsFeedback.tsx";
import Teachers from "../../components/StudioComponents/Teachers/Teachers.tsx";
import Hero from "../../components/StudioComponents/Hero/Hero.tsx";

const CoolStudio = () => {
   return (
      <>
         <Hero />
         {/* <HeroStudio /> */}
         <AboutStudio />
         <Courses />
         <Teachers />
         <StudentsFeedback />
         <Concert />
         <OurStudents />
         <ContactUsStudio />
      </>
   );
};

export default CoolStudio;
