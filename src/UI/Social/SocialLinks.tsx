import { useAppSelector } from "../../app/hooks.ts";
import styles from "./_socialLinks.module.scss";
import { socialIcons } from "../../assets/icons/socialIcons.tsx";
import createWhatsAppLink from "../../modules/createWhatsAppLink.ts";

const SocialLinks: React.FC<Prop.SocialLinks> = ({ setIsMenuOpen }) => {
   const getLinks = useAppSelector((state) => state.getContacts.data)!;

   const whatsApp = createWhatsAppLink(getLinks.whatsapp, "whatsapp");

   const handleFunction = () => {
      setIsMenuOpen(false);
   };

   return (
      <ul className={styles.socialLinks}>
         <li id="telegram">
            <a
               aria-label="link"
               href={getLinks.telegram}
               target="blank"
               onClick={handleFunction}
            >
               {socialIcons.telegram}
            </a>
         </li>
         <li id="whatsapp">
            <a
               aria-label="link"
               href={whatsApp}
               target="blank"
               onClick={handleFunction}
            >
               {socialIcons.whatsapp}
            </a>
         </li>
         <li id="instagram">
            <a
               aria-label="link"
               href={getLinks.instagram}
               target="blank"
               onClick={handleFunction}
            >
               {socialIcons.instagram}
            </a>
         </li>
         <li id="youtube">
            <a
               aria-label="link"
               href={getLinks.youtube}
               target="blank"
               onClick={handleFunction}
            >
               {socialIcons.youtube}
            </a>
         </li>
         <li id="tiktok">
            <a
               aria-label="link"
               href={getLinks.tiktok}
               target="blank"
               onClick={handleFunction}
            >
               {socialIcons.tiktok}
            </a>
         </li>
      </ul>
   );
};

export default SocialLinks;
