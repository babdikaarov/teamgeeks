import { FC } from "react";
import Logo from "../Logo/Logo";
import SocialLinks from "./socialLinks/SocialLinks";
import TopButtons from "./topButtons/TopButtons";
import styles from "../../scss/partials/ui/_header.module.scss";
type lyrics = {
   lyrics: string;
};
interface HeaderTemplateProps {
   links: {
      telegram: string;
      whatsapp: string;
      instagram: string;
      youtube: string;
      tiktok: string;
   };
   bandPage: boolean;
   lyrics: string;
   NavList: FC<lyrics>;
}

const HeaderTemplate: FC<HeaderTemplateProps> = ({ links, bandPage, lyrics, NavList }) => {
   return (
      <>
         <header className={styles.header}>
            <nav>
               <Logo bandPage={bandPage} />
               <NavList lyrics={lyrics} />
               <SocialLinks links={links} />
            </nav>
            <TopButtons />
         </header>
      </>
   );
};

export default HeaderTemplate;
