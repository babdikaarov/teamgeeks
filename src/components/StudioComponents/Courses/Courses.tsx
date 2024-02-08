import coursesData from "./getCoursesList";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import CoursesCard from "../../../UI/Cards/CoursesCard";
import styles from "./_courses.module.scss";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
import { EBlockID } from "../../../types";

const Courses = () => {
   const { ref } = useToggleActiveNavigation(EBlockID.Courses);

   return (
      <SectionWrapper
         header="Направления"
         id="courses"
      >
         <div
            ref={ref}
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
