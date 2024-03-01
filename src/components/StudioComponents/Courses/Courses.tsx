// modules
import { useAppSelector } from "../../../app/hooks";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import CoursesCard from "./CoursesCard";
// styles
import styles from "./_courses.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";

const Courses = () => {
   const { refToogle } = useToggleActiveNavigation(EBlockID.COURSES);
   const { data } = useAppSelector((state) => state.getCourses);

   return (
      <SectionWrapper header="Направления" id="courses">
         <div ref={refToogle} className={styles.courses_flex}>
            {data?.map((course) => <CoursesCard key={course.id} src={course.image} title={course.name} />)}
         </div>
      </SectionWrapper>
   );
};

export default Courses;
