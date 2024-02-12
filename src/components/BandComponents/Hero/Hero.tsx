// modules
// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
// import formatPhoneNumberToText from "../../../modules/formatPhoneNumberToText.ts";
// import { getHeroBand } from "../../../store/herobandThunk.ts";
// import { getContacts } from "../../../store/contactsThunk.ts";
// components
import HeroTeamplate from "../../../UI/Hero/HeroTemplate";
import SharedButton from "../../../UI/Buttons/SharedButton.tsx";
import video from "../../../tempData/hero/heroVideo.mp4"; // FIX_ME remove below imports and configure to backend

const Hero = () => {
   // const dispatch = useAppDispatch();
   // const dataBand = useAppSelector((state) => state.getHeroBand.data)!;
   // const dataContact = useAppSelector((state) => state.getContacts.data)!;

   // useEffect(() => {
   //    dispatch(getHeroBand());
   //    dispatch(getContacts());
   // }, [dispatch]);

   // const number = formatPhoneNumberToText(dataContact.bandNumber);

   return (
      <HeroTeamplate video={video}>
         <SharedButton
            // FIX_ME remove and add backend contact
            whatsapp={"+996755608908"}
            classname="bandHeroButton"
            text="Заказать Cool Band"
         />
      </HeroTeamplate>
   );
};

export default Hero;
