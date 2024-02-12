// modules
// import { useEffect } from "react";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
import { EBlockID } from "../../../globalTypesEnum";
// import { useAppDispatch, useAppSelector } from "../../../app/hooks";
// import { getAboutBand } from "../../../store/aboutBandThunk";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";
// styles
import styles from "./_aboutBand.module.scss";
// static data
import staticText from "./staticData.json";
import image from "../../../tempData/about/about.jpg"; // FIX_ME remove static image and provide backEnd when ready

const AboutBand: React.FC = () => {
   // const dispatch = useAppDispatch();
   // const data = useAppSelector((state) => state.getAboutBand.data);
   const { refToogle } = useToggleActiveNavigation(EBlockID.ABOUT);

   // useEffect(() => {
   //    dispatch(getAboutBand());
   // }, [dispatch]);
   // console.log(data)

   return (
      <SectionWrapper
         className={styles.aboutBand}
         header={"Cool band"}
         id={EBlockID.ABOUT}
      >
         <div
            className={styles.about}
            ref={refToogle}
         >
            <article className={styles.article}>
               <p>{staticText.text1}</p>
               <p>{staticText.text2}</p>
               <p>{staticText.text3}</p>
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
