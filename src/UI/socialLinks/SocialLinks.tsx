import { useEffect} from "react";
import { socialIcons } from "./icons";
import styles from "./_socialLinks.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { getContacts } from "../../store/contactsThunk.ts";

const SocialLinks = () => {

   const dispatch = useAppDispatch();
   const getLinks = useAppSelector(state => state.getContacts.data)!;

   useEffect(() => {
      dispatch(getContacts());
   }, [dispatch]);


   return (
      <ul className={styles.socialLinks}>
         <li id="telegram">
            <a href={getLinks.telegram} target="blank">
               {socialIcons.telegram}
            </a>
         </li>
         <li id="whatsapp">
            <a href={getLinks.whatsapp} target="blank">
               {socialIcons.whatsapp}
            </a>
         </li>
         <li id="instagram">
            <a href={getLinks.instagram} target="blank">
               {socialIcons.instagram}
            </a>
         </li>
         <li id="youtube">
            <a href={getLinks.youtube} target="blank">
               {socialIcons.youtube}
            </a>
         </li>
         <li id="tiktok">
            <a href={getLinks.tiktok} target="blank">
               {socialIcons.tiktok}
            </a>
         </li>
      </ul>
   );
};

export default SocialLinks;
