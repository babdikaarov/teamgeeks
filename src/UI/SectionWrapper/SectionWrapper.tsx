import { FC } from "react";
import styles from "./_sectionWrapper.module.scss";
import { SectionWrapperProps } from "./types";

const SectionWrapper: FC<SectionWrapperProps> = ({ header = "", className = "", id = "", children }) => {
  return (
    <section className={"sectionWrapper " + className} id={id}>
      {header.length > 0 && <h2 className={styles.h2}>{header}</h2>}
      {children}
    </section>
  );
};

export default SectionWrapper;
