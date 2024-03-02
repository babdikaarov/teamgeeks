// modules
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import createMailtoLink from "../../modules/createMailtoLink";
import createWhatsAppLink from "../../modules/createWhatsAppLink";
// styles
import styles from "./_footer.module.scss";
// components
import Logo from "../../UI/Logo/Logo";
import formatPhoneNumber from "../../modules/formatPhoneNumberToText";
import { mainElementAnimation } from "../../modules/transition";

const FooterComponent: React.FC<Prop.Footer.FooterComponent> = ({ backendData }) => {
   const { bandNumber, studioNumber, address, email, city, organizationId } = backendData.contactDetails;
   const {pathname} = useLocation();
   const handleNavigation = () => {
      if(pathname.includes("studio")){
         return
      } else {
         mainElementAnimation();
      }
   }
   return (
      <footer className={styles.footer}>
         <div className={styles.footerLogos}>
            <Logo id="logo1footer" />
            <Logo id="logo2footer" footerHide={styles.footerHide} />
         </div>

         <div className={styles.footerInfo}>
            <div className={styles.footerBoxEdu}>
               <div className={styles.h4}>Обучение:</div>
               <ul>
                  {backendData.coursesList.map((item, i) => (
                     <li key={i}>
                        <HashLink to="/studio/#courses" aria-label="link" onClick={handleNavigation} > 
                           {item}
                        </HashLink>
                     </li>
                  ))}
               </ul>
            </div>
            <div className={styles.footerBoxAddress}>
               <div className={styles.h4}>Адрес:</div>
               <ul>
                  <li>
                     <Link target="_blank" to={`https://2gis.kg/${city}/firm/${organizationId}`}>
                        {address}
                     </Link>
                  </li>
               </ul>
            </div>
            <div className={styles.footerBoxContacts}>
               <div className={styles.h4}>Контакты:</div>
               <ul>
                  <li>
                     <Link target="_blank" to={createWhatsAppLink(bandNumber, "Хочу Cool Band на свем мероприятие!")}>
                        {`${formatPhoneNumber(bandNumber)} `}
                        Cool Band
                     </Link>
                  </li>
                  <li>
                     <Link target="_blank" to={createWhatsAppLink(studioNumber, "Хочу узнать подробнее об обучении!")}>
                        {`${formatPhoneNumber(studioNumber)} `}
                        Cool Studio
                     </Link>
                  </li>
                  <li>
                     <Link to={createMailtoLink(email, "Заказать Cool Band на Мероприятие!")}>{email}</Link>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
};

export default FooterComponent;
