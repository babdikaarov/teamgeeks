// modules
import { useAppSelector } from "../../../app/hooks.ts";
// components
import HeroTeamplate from "../../../UI/Hero/HeroTemplate";
import SharedButton from "../../../UI/Buttons/SharedButton.tsx";

const Hero = () => {
   const video = useAppSelector((state) => state.getHeroBand.data?.video)!;
   const { bandNumber } = useAppSelector((state) => state.getContacts.data)!;
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
