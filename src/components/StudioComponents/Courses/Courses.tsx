import { coursesList } from "../../../tempData/getCoursesList";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import CoursesCard from "../../../UI/Cards/CoursesCard";
import styles from "../../../scss/partials/coolStudio/_courses.module.scss";

const Courses = () => {
   return (
      <SectionWrapper header="Направления" id="courses">
         <div className={styles.courses_grid}>
            {coursesList.map((course, index) => (
               <CoursesCard key={index} src={course.src} title={course.title} />
            ))}
         </div>
      </SectionWrapper>
   );
};

export default Courses;
