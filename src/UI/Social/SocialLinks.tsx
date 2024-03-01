import { useAppSelector } from "../../app/hooks.ts";
import styles from "./_socialLinks.module.scss";
import { socialIcons } from "../../assets/icons/socialIcons.tsx";
import createWhatsAppLink from "../../modules/createWhatsAppLink.ts";
import { useLocation } from "react-router-dom";

const SocialLinks: React.FC<Prop.SocialLinks> = ({ setIsMenuOpen }) => {
   const contacts = useAppSelector((state) => state.getContacts.data)!;
   const { pathname } = useLocation();
   const whatsAppBand = createWhatsAppLink(contacts.bandNumber, "Заказать Cool Band");
   const whatsAppStudio = createWhatsAppLink(contacts.studioNumber, "Узнать больше об Обучении");
   const handleFunction = () => {
      setIsMenuOpen(false);
   };

   return (
      <ul className={styles.socialLinks}>
         <li id="telegram">
            <a aria-label="link" href={`https://t.me/${contacts.telegram}`} target="blank" onClick={handleFunction}>
               {socialIcons.telegram}
            </a>
         </li>
         <li id="whatsapp">
            <a
               aria-label="link"
               href={!pathname.includes("studio") ? whatsAppBand : whatsAppStudio}
               target="blank"
               onClick={handleFunction}
            >
               {socialIcons.whatsapp}
            </a>
         </li>
         <li id="instagram">
            <a aria-label="link" href={contacts.instagram} target="blank" onClick={handleFunction}>
               {socialIcons.instagram}
            </a>
         </li>
         <li id="youtube">
            <a aria-label="link" href={contacts.youtube} target="blank" onClick={handleFunction}>
               {socialIcons.youtube}
            </a>
         </li>
         <li id="tiktok">
            <a aria-label="link" href={contacts.tiktok} target="blank" onClick={handleFunction}>
               {socialIcons.tiktok}
            </a>
         </li>
      </ul>
   );
};

export default SocialLinks;
