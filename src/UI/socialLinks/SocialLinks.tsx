import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { getContacts } from "../../store/contactsThunk.ts";
import styles from "./_socialLinks.module.scss";
import { socialIcons } from "./icons";

interface SocialLinksProps {
   lyrics: string;
   setIsMenuOpen: (isOpen: boolean) => void;
}

const SocialLinks: FC<SocialLinksProps> = ({ setIsMenuOpen }) => {
   const dispatch = useAppDispatch();
   const getLinks = useAppSelector((state) => state.getContacts.data)!;

   useEffect(() => {
      dispatch(getContacts());
   }, [dispatch]);

   const handleFunction = () => {
      setIsMenuOpen(false);
   };

   return (
      <ul className={styles.socialLinks}>
         <li id="telegram">
            <a
               href={getLinks.telegram}
               target="blank"
               onClick={handleFunction}
            >
               {socialIcons.telegram}
            </a>
         </li>
         <li id="whatsapp">
            <a
               href={getLinks.whatsapp}
               target="blank"
               onClick={handleFunction}
            >
               {socialIcons.whatsapp}
            </a>
         </li>
         <li id="instagram">
            <a
               href={getLinks.instagram}
               target="blank"
               onClick={handleFunction}
            >
               {socialIcons.instagram}
            </a>
         </li>
         <li id="youtube">
            <a
               href={getLinks.youtube}
               target="blank"
               onClick={handleFunction}
            >
               {socialIcons.youtube}
            </a>
         </li>
         <li id="tiktok">
            <a
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
