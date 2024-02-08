import HeroTemplate from "../../../UI/Hero/HeroTemplate";
import SharedButton from "../../../UI/buttons/SharedButton";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import { useEffect } from "react";
import formatPhoneNumberToText from "../../../modules/formatPhoneNumberToText.ts";
import { getContacts } from "../../../store/contactsThunk.ts";
import { getHeroStudio } from "../../../store/heroStudioThunk.ts";

const Hero = () => {
   const dispatch = useAppDispatch();
   const dataStudio = useAppSelector((state) => state.getHeroStudio.data)!;
   const dataContact = useAppSelector((state) => state.getContacts.data)!;

   useEffect(() => {
      dispatch(getHeroStudio());
      dispatch(getContacts());
   }, [dispatch]);

   const number = formatPhoneNumberToText(dataContact.studioNumber);

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
