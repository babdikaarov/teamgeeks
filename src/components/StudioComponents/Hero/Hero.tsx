// modules
// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
// import { getContacts } from "../../../store/contactsThunk.ts";
// import { getHeroStudio } from "../../../store/heroStudioThunk.ts";
// import formatPhoneNumberToText from "../../../modules/formatPhoneNumberToText.ts";
// components
import HeroTemplate from "../../../UI/Hero/HeroTemplate";
import SharedButton from "../../../UI/Buttons/SharedButton.tsx";
import video from "../../../tempData/hero/HeroStudio.mp4"; // FIX_ME replace static media to backend when ready

const Hero = () => {
   // FIX_ME dispatch getContacts on App.tsx after mounting  and here use only selector
   // const dispatch = useAppDispatch();
   // const dataStudio = useAppSelector((state) => state.getHeroStudio.data)!;
   // const dataContact = useAppSelector((state) => state.getContacts.data)!;

   // useEffect(() => {
   //    dispatch(getHeroStudio());
   //    dispatch(getContacts());
   // }, [dispatch]);
   const localData = {
      video: video,
      text: {
         paragraph: "",
         header: "Откройте двери в мир музыки с Coolstudio",
      },
   }; // FIX_ME replace static media to backend when ready

   // const number = formatPhoneNumberToText(dataContact.studioNumber);

   // const texts = {
   //    header: dataStudio.title,
   //    paragraph: dataStudio.text,
   // };

   return (
      <HeroTemplate
         video={localData.video}
         // video={dataStudio.video}
         text={localData.text}
         // text={texts}
      >
         <SharedButton
            whatsapp={"996997608908"}
            classname="studioHeroButton"
            text="Записаться на пробный урок"
         />
      </HeroTemplate>
   );
};

export default Hero;
