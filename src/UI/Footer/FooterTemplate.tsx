import { FC } from "react";
import styles from "./_footer.module.scss";
import FooterBox from "./FooterBox";
import Logo from "../Logo/Logo";
// import SocialLinks from "../socialLinks/SocialLinks";
import staticData from "./staticData.json";
import formatPhoneNumberToText from "../../modules/formatPhoneNumberToText";
import createMailtoLink from "../../modules/createMailtoLink";
import createWhatsAppLink from "../../modules/createWhatsAppLink";
import { FooterTemplateProps } from "./types";
// import { tempLinks } from "../../tempData/getHeaderData";
import { Target } from "./types";
const FooterTemplate: FC<FooterTemplateProps> = ({ bandPage, backendData }) => {
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
            <FooterBox
               className={styles.footerBoxEdu}
               header={staticData.education.header}
               target={Target.noBlank}
               items={staticData.education.items.map((item) => {
                  return { text: item, link: "/studio/#courses" };
               })}
            />
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
         {/* FIXME design unclear upon width >  1440  
         <div className={styles.footerSocialPositoin}>
            <SocialLinks links={tempLinks} />
         </div> */}
      </footer>
   );
};

export default FooterTemplate;
