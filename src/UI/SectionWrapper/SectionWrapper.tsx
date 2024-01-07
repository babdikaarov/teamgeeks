import React, { FC, ReactNode } from "react";
import styles from "../../scss/partials/ui/_sectionWrapper.module.scss";
interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
   header?: string;
   children: ReactNode;
}
const SectionWrapper: FC<SectionWrapperProps> = ({ header = "", className = "", id = "", children }) => {
   return (
      <section className={"sectionWrapper " + className} id={id}>
         {header.length > 0 && <h2 className={styles.h2}>{header}</h2>}
         {children}
      </section>
   );
};

export default SectionWrapper;
