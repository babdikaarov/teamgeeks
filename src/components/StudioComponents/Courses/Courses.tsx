import coursesData from "../../../tempData/getCoursesList";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import CoursesCard from "../../../UI/Cards/CoursesCard";
import styles from "../../../scss/partials/coolStudio/_courses.module.scss";
import { useEffect, useState } from "react";

type Data = {
   src: Promise<typeof import("*.svg")>;
   title: string;
}[];
const Courses = () => {
   const [data, setData] = useState<Data>();

   useEffect(() => {
      const loadCards = async () => {
         await new Promise(coursesData).then((imported) => setData(imported));
      };
      loadCards();
   }, []);

   return (
      <SectionWrapper header="Направления" id="courses">
         <div className={styles.courses_grid}>
            {data?.map((course, index) => <CoursesCard key={index} src={course.src} title={course.title} />)}
         </div>
      </SectionWrapper>
   );
};

export default Courses;
