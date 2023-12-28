import { FC } from "react";
import styles from "../../scss/partials/ui/_footer.module.scss";
import FooterBox from "./footerBox/FooterBox";
import Logo from "../Logo/Logo";

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
    <footer>
      <div className={styles.footerLogos}>
        <Logo bandPage={bandPage} />
        <Logo bandPage={!bandPage} />
      </div>
      {/* <ul className={styles.footerContent}> */}
      <FooterBox className={styles.footerBoxEdu} text={content.education} />
      <FooterBox className={styles.footerBoxAddress} text={content.address} />
      <FooterBox className={styles.footerBoxContacts} text={content.contact} />
    </footer>
  );
};

export default FooterTemplate;
