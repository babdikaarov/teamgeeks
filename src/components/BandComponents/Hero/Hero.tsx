import HeroTeamplate from "../../../UI/Hero/HeroTemplate";
import SharedButton from "../../../UI/buttons/SharedButton";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import { useEffect } from "react";
import { getHeroBand } from "../../../store/herobandThunk.ts";
import formatPhoneNumberToText from "../../../modules/formatPhoneNumberToText.ts";
import { getContacts } from "../../../store/contactsThunk.ts";

const Hero = () => {
   const dispatch = useAppDispatch();
   const dataBand = useAppSelector((state) => state.getHeroBand.data)!;
   const dataContact = useAppSelector((state) => state.getContacts.data)!;

   useEffect(() => {
      dispatch(getHeroBand());
      dispatch(getContacts());
   }, [dispatch]);

   const number = formatPhoneNumberToText(dataContact.bandNumber);

   return (
      <HeroTeamplate video={dataBand.video}>
         <SharedButton
            whatsapp={number}
            classname="bandHeroButton"
            text="Заказать Cool Band"
         />
      </HeroTeamplate>
   );
};

export default Hero;
