// modules
// FIX_ME implement below 3 modules logic inside FooterBox.tsx
import createMailtoLink from "../../modules/createMailtoLink";
import createWhatsAppLink from "../../modules/createWhatsAppLink";
import formatPhoneNumberToText from "../../modules/formatPhoneNumberToText";
// styles
import styles from "./_footer.module.scss";
// components
import Logo from "../../UI/Logo/Logo";
import FooterBox from "./FooterBox";
// static
import staticData from "./staticData.json";
// ENUMS
import { Target } from "../../globalTypesEnum";

const FooterComponent: React.FC<Prop.Footer.FooterComponent> = ({ bandPage, backendData }) => {
   const notFoundData = [{ text: "Data not found", link: "" }];

   return (
      <footer className={styles.footer}>
         <div className={styles.footerLogos}>
            <Logo bandPage={bandPage} />
            <Logo
               bandPage={!bandPage}
               footerHide={styles.footerHide}
            />
         </div>

         <div className={styles.footerInfo}>
            {/* FIX_ME refactor below code when backend ready */}
            <FooterBox
               className={styles.footerBoxEdu}
               header={staticData.education.header}
               target={Target.noBlank}
               items={staticData.education.items.map((item) => {
                  return { text: item, link: "/studio/#courses" };
               })}
            />
            {/* FIX_ME refactor below code when backend ready */}
            <FooterBox
               className={styles.footerBoxAddress}
               header={staticData.address.header}
               target={Target.blank}
               items={
                  backendData?.address.map((el) => {
                     return { text: (<span>{el.text}</span>) as unknown as string, link: el.link };
                  }) ?? notFoundData
               }
            />
            {/* FIX_ME when backend ready remove and refactor below code */}
            <FooterBox
               className={styles.footerBoxContacts}
               header={staticData.contacts.header}
               target={Target.blank}
               items={
                  backendData?.contacts.map((item, i) => {
                     let formatText: string = "";
                     let formatLink: string = "";

                     if (typeof item.link === "number") {
                        formatLink = createWhatsAppLink(item.link, item.text);
                        formatText = (
                           <>
                              <span>{formatPhoneNumberToText(item.link)}</span> {staticData.contacts.items[i]}
                           </>
                        ) as unknown as string;
                     } else if (typeof item.link === "string") {
                        formatLink = createMailtoLink(item.link, item.text);
                        formatText = (<span>{item.link}</span>) as unknown as string;
                     }
                     return {
                        text: formatText,
                        link: formatLink,
                     };
                  }) ?? notFoundData
               }
            />
         </div>
      </footer>
   );
};

export default FooterComponent;
