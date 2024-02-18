// modules
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import { getContacts } from "../../../store/contactsThunk.ts";
import { getHeroStudio } from "../../../store/heroStudioThunk.ts";
// components
import HeroTemplate from "../../../UI/Hero/HeroTemplate";
import SharedButton from "../../../UI/Buttons/SharedButton.tsx";

const Hero = () => {
   const dispatch = useAppDispatch();
   const dataStudio = useAppSelector((state) => state.getHeroStudio.data)!;
   const { studioNumber } = useAppSelector((state) => state.getContacts.data)!;

   useEffect(() => {
      dispatch(getHeroStudio());
      dispatch(getContacts());
   }, [dispatch]);

   const texts = {
      header: dataStudio.title,
      paragraph: dataStudio.text,
   };

   return (
      <HeroTemplate
         video={dataStudio.video}
         text={texts}
      >
         <SharedButton
            whatsapp={studioNumber}
            classname="studioHeroButton"
            text="Записаться на пробный урок"
         />
      </HeroTemplate>
   );
};

export default Hero;
