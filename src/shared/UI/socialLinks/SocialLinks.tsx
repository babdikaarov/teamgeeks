import { FC } from "react";
import { socialIcons } from "./icons";
interface SocialLinksProps {
   links: {
      telegram: string;
      whatsapp: string;
      instagram: string;
      youtube: string;
      tiktok: string;
   };
}

const SocialLinks: FC<SocialLinksProps> = ({ links }) => {
   return (
      <ul className="social-links">
         <li id="telegram">
            <a href={links.telegram}>{socialIcons.telegram}</a>
         </li>
         <li id="whatsapp">
            <a href={links.whatsapp}>{socialIcons.whatsapp}</a>
         </li>
         <li id="instagram">
            <a href={links.instagram}>{socialIcons.instagram}</a>
         </li>
         <li id="youtube">
            <a href={links.youtube}>{socialIcons.youtube}</a>
         </li>
         <li id="tiktok">
            <a href={links.tiktok}>{socialIcons.tiktok}</a>
         </li>
      </ul>
   );
};

export default SocialLinks;
