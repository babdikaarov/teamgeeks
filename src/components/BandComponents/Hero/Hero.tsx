// modules
import { useAppSelector } from "../../../app/hooks.ts";
// components
import HeroTeamplate from "../../../UI/Hero/HeroTemplate";
import SharedButton from "../../../UI/Buttons/SharedButton.tsx";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Hero: React.FC<Props> = ({ ...props }) => {
   const video = useAppSelector((state) => state.getHeroBand.data.video)!;
   const { bandNumber } = useAppSelector((state) => state.getContacts.data)!;
   return (
      <HeroTeamplate video={video} {...props}>
         <SharedButton whatsapp={bandNumber} classname="bandHeroButton" text="Заказать Cool Band" />
      </HeroTeamplate>
   );
};

export default Hero;
