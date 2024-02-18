// modules
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import { getHeroBand } from "../../../store/herobandThunk.ts";
// components
import HeroTeamplate from "../../../UI/Hero/HeroTemplate";
import SharedButton from "../../../UI/Buttons/SharedButton.tsx";

const Hero = () => {
   const dispatch = useAppDispatch();
   const video = useAppSelector((state) => state.getHeroBand.data?.video)!;
   const { bandNumber } = useAppSelector((state) => state.getContacts.data)!;

   useEffect(() => {
      dispatch(getHeroBand());
   }, [dispatch]);

   return (
      <HeroTeamplate video={video}>
         <SharedButton
            whatsapp={bandNumber}
            classname="bandHeroButton"
            text="Заказать Cool Band"
         />
      </HeroTeamplate>
   );
};

export default Hero;
