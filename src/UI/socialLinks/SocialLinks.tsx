import { FC } from "react";
import { socialIcons } from "./icons";
import styles from "../Header/header/_socialLinks.module.scss";
import { SocialLinksProps } from "./types";

const SocialLinks: FC<SocialLinksProps> = ({ links }) => {
  // FIXME uti4nit links budut po backend or it has to be generated here
  return (
    <ul className={styles.socialLinks}>
      <li id="telegram">
        <a href={links.telegram} target="blank">
          {socialIcons.telegram}
        </a>
      </li>
      <li id="whatsapp">
        <a href={links.whatsapp} target="blank">
          {socialIcons.whatsapp}
        </a>
      </li>
      <li id="instagram">
        <a href={links.instagram} target="blank">
          {socialIcons.instagram}
        </a>
      </li>
      <li id="youtube">
        <a href={links.youtube} target="blank">
          {socialIcons.youtube}
        </a>
      </li>
      <li id="tiktok">
        <a href={links.tiktok} target="blank">
          {socialIcons.tiktok}
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
