// modules
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import CoursesCard from "./CoursesCard";
// styles
import styles from "./_courses.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";
import coursesData from "../../../tempData/getCoursesList"; //FIX_ME replace with backend

const Courses = () => {
   const { refToogle } = useToggleActiveNavigation(EBlockID.COURSES);

   return (
      <SectionWrapper
         header="Направления"
         id="courses"
      >
         <div
            ref={refToogle}
            className={styles.courses_flex}
         >
            {coursesData.map((course, index) => (
               <CoursesCard
                  key={index}
                  src={course.src}
                  title={course.title}
               />
            ))}
         </div>
      </SectionWrapper>
   );
};

export default Courses;
