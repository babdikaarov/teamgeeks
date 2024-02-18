// modules
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import { getContacts } from "../../../store/contactsThunk.ts";
import { getHeroStudio } from "../../../store/heroStudioThunk.ts";
import formatPhoneNumberToText from "../../../modules/formatPhoneNumberToText.ts";
// components
import HeroTemplate from "../../../UI/Hero/HeroTemplate";
import SharedButton from "../../../UI/Buttons/SharedButton.tsx";

const Hero = () => {
   const dispatch = useAppDispatch();
   const dataStudio = useAppSelector((state) => state.getHeroStudio.data)!;
   const studioNumber = useAppSelector((state) => state.getContacts.data?.studioNumber)!;

   useEffect(() => {
      dispatch(getHeroStudio());
      dispatch(getContacts());
   }, [dispatch]);

   const number = formatPhoneNumberToText(studioNumber);

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
            whatsapp={number}
            classname="studioHeroButton"
            text="Записаться на пробный урок"
         />
      </HeroTemplate>
   );
};

export default Hero;
