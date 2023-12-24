import styles from "./_footer.module.scss";
import { FC } from "react";
import FooterBox from "./footerBox/FooterBox";
import Logo from "../Header/logo/Logo";

type content = {
   education: FooterBox;
   address: FooterBox;
   contact: FooterBox;
};
type logos = {
   bandLogo: Logo;
   studioLogo: Logo;
};

interface FooterProps {
   content: content;
   pageLogos: logos;
}

const Footer: FC<FooterProps> = ({ pageLogos, content }) => {
   return (
      <footer className={styles.footer}>
         <div className={styles.footerContainer}>
            <div className={styles.footerLogos}>
               <Logo logo={pageLogos.bandLogo} />
               <Logo logo={pageLogos.studioLogo} />
            </div>
            <ul className={styles.footerContent}>
               <FooterBox className={styles.footerBoxEdu} text={content.education} />
               <FooterBox className="footer-box-address" text={content.address} />
               <FooterBox className={styles.footerBoxContacts} text={content.contact} />
            </ul>
         </div>
      </footer>
   );
};

export default Footer;
