// import { FC } from "react";
import checkbox from "../../../assets/icons/checkbox";
import styles from "../../../scss/partials/coolBand/_whyus.module.scss";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import getData from "../../../tempData/getWhyUsData";

// type whyData = {
//   header: string;
//   paragraph: string;
// };

// interface WhyUsProps {
//   whyUsData: whyData[];
// }

const WhyUs = () => {
   return (
      <SectionWrapper header="Почему выбирают нас" className="why-us">
         <section className={styles.whyGrid}>
            {getData.map((el, i) => (
               <article key={i}>
                  <h3>
                     <span>{checkbox}</span>
                     {el.header}
                  </h3>
                  <p>{el.paragraph}</p>
               </article>
            ))}
         </section>
      </SectionWrapper>
   );
};

export default WhyUs;
