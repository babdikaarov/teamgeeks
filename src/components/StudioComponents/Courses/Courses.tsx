// modules
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import CoursesCard from "./CoursesCard";
// styles
import styles from "./_courses.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";
import coursesData from "../../../tempData/getCoursesList";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getCourses } from "../../../store/coursesThank";
// import { useAppSelector } from "../../../app/hooks";

const Courses = () => {
   const { refToogle } = useToggleActiveNavigation(EBlockID.COURSES);
   // const dispatch = useDispatch();
   // const { data } = useAppSelector((state) => state.getCourses);
   // useEffect(() => {
   //    dispatch(getCourses());
   // }, [dispatch]);

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
                  // key={course.id}
                  // src={course.image}
                  // title={course.name}
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
