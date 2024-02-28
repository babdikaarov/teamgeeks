// modules
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import createMailtoLink from "../../modules/createMailtoLink";
import createWhatsAppLink from "../../modules/createWhatsAppLink";
// styles
import styles from "./_footer.module.scss";
// components
import Logo from "../../UI/Logo/Logo";
import formatPhoneNumber from "../../modules/formatPhoneNumberToText";

const FooterComponent: React.FC<Prop.Footer.FooterComponent> = ({ bandPage, backendData }) => {
   const { bandNumber, studioNumber, address, email, city, organizationId } = backendData.contactDetails;
   return (
      <footer className={styles.footer}>
         <div className={styles.footerLogos}>
            <Logo
               bandPage={bandPage}
               id="logo1footer"
               onFooter
            />
            <Logo
               bandPage={bandPage}
               id="logo2footer"
               footerHide={styles.footerHide}
               onFooter
            />
         </div>

         <div className={styles.footerInfo}>
            <div className={styles.footerBoxEdu}>
               <div className={styles.h4}>Обучение:</div>
               <ul>
                  {backendData.coursesList.map((item, i) => (
                     <li key={i}>
                        <HashLink
                           to="/studio/#courses"
                           aria-label="link"
                        >
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
                     <Link
                        target="_blank"
                        to={`https://2gis.kg/${city}/firm/${organizationId}`}
                     >
                        {address}
                     </Link>
                  </li>
               </ul>
            </div>
            <div className={styles.footerBoxContacts}>
               <div className={styles.h4}>Контакты:</div>
               <ul>
                  <li>
                     <Link
                        target="_blank"
                        to={createWhatsAppLink(bandNumber, "Хочу Cool Band на свем мероприятие!")}
                     >
                        {`${formatPhoneNumber(bandNumber)} `}
                        Cool Band
                     </Link>
                  </li>
                  <li>
                     <Link
                        target="_blank"
                        to={createWhatsAppLink(studioNumber, "Хочу узнать подробнее об обучении!")}
                     >
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
