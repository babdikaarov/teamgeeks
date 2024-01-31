import getEventCards from "../../../tempData/getEventCards";
import styles from "./_ourevents.module.scss";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import ButtonWithArrow from "../../../UI/buttons/ButtonWithArrow";
import { useEffect } from "react";
const OurEvents = () => {
   useEffect(() => {
      const scrollers = document.querySelectorAll('[data-scroller="outter"]');
      addAnimation();
      function addAnimation() {
         scrollers.forEach((scroller) => {
            const scrollerInner = scroller.querySelector('[data-scroller_inner="inner"]');
            if (!scrollerInner) return;
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.concat(scrollerContent, scrollerContent).forEach((item) => {
               const duplicatedItem = item.cloneNode(true) as HTMLElement;
               duplicatedItem.setAttribute("aria-hidden", "true");
               scrollerInner.appendChild(duplicatedItem);
            });
         });
      }
   }, []);

   return (
      <SectionWrapper header={"Наши мероприятия"} className={styles.ourEvent}>
         <div className={styles.scroller} data-scroller="outter" data-direction="left">
            <div className={styles.scrollerInner} data-scroller_inner="inner">
               {getEventCards.map((card, i) => (
                  <img key={i} src={card.src} alt={card.alt} />
               ))}
            </div>
         </div>
         <ButtonWithArrow text="Подробнее" to={"/gallery"} />
      </SectionWrapper>
   );
};

export default OurEvents;
