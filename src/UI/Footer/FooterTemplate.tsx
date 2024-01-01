import { FC } from "react";
import styles from "../../scss/partials/ui/_footer.module.scss";
import FooterBox from "./footerBox/FooterBox";
import Logo from "../Logo/Logo";
import SocialLinks from "../Header/socialLinks/SocialLinks";

type content = {
   education: FooterBox;
   address: FooterBox;
   contact: FooterBox;
};

interface FooterTemplateProps {
   content: content;
   bandPage: boolean;
}

const FooterTemplate: FC<FooterTemplateProps> = ({ bandPage, content }) => {
   return (
      <footer className={styles.footer}>
         <div className={styles.footerLogos}>
            <Logo bandPage={bandPage} />
            <Logo bandPage={!bandPage} />
         </div>
         <div className={styles.footerInfo}>
            <FooterBox className={styles.footerBoxEdu} text={content.education} />
            <FooterBox className={styles.footerBoxAddress} text={content.address} />
            <FooterBox className={styles.footerBoxContacts} text={content.contact} />
         </div>
         <div className={styles.footerSocialPositoin}>
            <SocialLinks
               links={{
                  telegram: "",
                  whatsapp: "",
                  instagram: "",
                  youtube: "",
                  tiktok: "",
               }}
            />
         </div>
      </footer>
   );
};

export default FooterTemplate;
