import { FC, useEffect, useState } from "react";
import styles from "../../scss/partials/ui/cards/_coursesCard.module.scss";

interface CoursesCardProps {
   src: Promise<typeof import("*.svg")>;

   title: string;
}
const CoursesCard: FC<CoursesCardProps> = ({ src, title }) => {
   const [resolvedSrc, setResolvedSrc] = useState<string | undefined>(undefined);

   useEffect(() => {
      src.then((importedSrc) => setResolvedSrc(importedSrc.default));
   }, [src]);
   return (
      <div className={styles.courseCardContainer}>
         <img src={resolvedSrc} alt={title} />
         <h6>{title}</h6>
      </div>
   );
};

export default CoursesCard;
