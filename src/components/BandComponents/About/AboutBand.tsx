// import { useEffect } from "react";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import styles from "./_aboutBand.module.scss";
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
import { EBlockID } from "../../../types";
import image from "/gallery/event1/23.jpg";
// import { useAppDispatch, useAppSelector } from "../../../app/hooks";
// import { getAboutBand } from "../../../store/aboutBandThunk";

const AboutBand: React.FC = () => {
   // const dispatch = useAppDispatch();
   // const data = useAppSelector((state) => state.getAboutBand.data);
   const { refToogle } = useToggleActiveNavigation(EBlockID.About);

   const text =
      "Coolband- яркая команда настоящих профессионалов, состоящая из инструментального кавер-бэнда, танцевально-интерактивного коллектива и огненных диджеев, которые зажгут любое мероприятие своим виртуозным исполнением, драйвовым шоу, и качественным звуком. Мы дарим своим слушателям незабываемую возможность насладиться шедеврами отечественных и мировых исполнителей в живом звучании. Мы дарим своим слушателям незабываемую возможность насладиться шедеврами отечественных и мировых исполнителей в живом звучании.";
   // useEffect(() => {
   //    dispatch(getAboutBand());
   // }, [dispatch]);
   // console.log(data)
   return (
      <SectionWrapper
         className={styles.aboutBand}
         header={"Cool band"}
         id={EBlockID.About}
      >
         <div
            className={styles.about}
            ref={refToogle}
         >
            <article className={styles.article}>
               {text.split(/(?<=[.!?])\s+/).map((newLine, i) => (
                  <p
                     key={i}
                     className={styles.text}
                  >
                     {newLine}
                  </p>
               ))}
            </article>
            <div className={styles.image}>
               <ImageLoader
                  // src={data?.image}
                  src={image}
                  // bluer={data?.bluer && data.bluer}
                  bluer={""}
               />
            </div>
         </div>
      </SectionWrapper>
   );
};

export default AboutBand;
