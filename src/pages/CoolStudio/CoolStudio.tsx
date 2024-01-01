import AboutStudio from "../../components/StudioComponents/AboutStudio/AboutStudio";
import StudentsFeedback from "../../components/StudioComponents/StudentsFeedback/StudentsFeedback.tsx";
import Courses from "../../components/StudioComponents/Courses/Courses.tsx";
import Hero from "../../components/StudioComponents/Hero/Hero.tsx";
import Concert from "../../components/StudioComponents/Concerts/Concert.tsx";
import OurStudents from "../../components/StudioComponents/OurStudents/OurStudent.tsx";
import ContactUsStudio from "../../components/StudioComponents/ContactUS/ContactUsStudio.tsx";

const CoolStudio = () => {
   return (
      <>
         <Hero />
         <AboutStudio />
         <Courses />
         <StudentsFeedback />
         <Concert />
         <OurStudents />
         <ContactUsStudio />
      </>
   );
};

export default CoolStudio;
