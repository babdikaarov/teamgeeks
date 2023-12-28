import React, { FC, ReactNode } from "react";
interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: string;
  children: ReactNode;
  className?: string;
}
const SectionWrapper: FC<SectionWrapperProps> = ({ header = "", className = "", id = "", children }) => {
  return (
    <section className={`section_wrapper ${className} `} id={id}>
      {header.length > 0 && <h2>{header}</h2>}
      {children}
    </section>
  );
};

export default SectionWrapper;
