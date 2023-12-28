import { FC } from "react";
import styles from "./_footer.module.scss";
import FooterBox from "./footerBox/FooterBox";
import Logo from "../Logo/Logo";

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
    <footer className="container">
      <div className={styles.footerLogos}>
        <Logo logo={pageLogos.bandLogo} />
        <Logo logo={pageLogos.studioLogo} />
      </div>
      <ul className={styles.footerContent}>
        <FooterBox className={styles.footerBoxEdu} text={content.education} />
        <FooterBox className={styles.footerBoxAddress} text={content.address} />
        <FooterBox className={styles.footerBoxContacts} text={content.contact} />
      </ul>
    </footer>
  );
};

export default Footer;
