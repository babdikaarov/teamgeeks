// modules
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import formatPhoneNumberToText from "../../../modules/formatPhoneNumberToText.ts";
import { getHeroBand } from "../../../store/herobandThunk.ts";
import { getContacts } from "../../../store/contactsThunk.ts";
// components
import HeroTeamplate from "../../../UI/Hero/HeroTemplate";
import SharedButton from "../../../UI/Buttons/SharedButton.tsx";

const Hero = () => {
   const dispatch = useAppDispatch();
   const video = useAppSelector((state) => state.getHeroBand.data?.video)!;
   const bandNumber = useAppSelector((state) => state.getContacts.data?.bandNumber)!;

   useEffect(() => {
      dispatch(getHeroBand());
      dispatch(getContacts());
   }, [dispatch]);

   const number = formatPhoneNumberToText(bandNumber);

   return (
      <HeroTeamplate video={video}>
         <SharedButton
            whatsapp={number}
            classname="bandHeroButton"
            text="Заказать Cool Band"
         />
      </HeroTeamplate>
   );
};

export default Hero;
