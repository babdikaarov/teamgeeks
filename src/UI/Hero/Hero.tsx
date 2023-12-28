import { FC, ReactNode } from "react";
import styles from "./_hero.module.scss";
import ReserveUsButton from "./ReserveUsButton";
interface HeroProps {
  contacts: string;
  video: {
    src: string;
    type: string;
  };
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}
const Hero: FC<HeroProps> = ({ contacts, video, children }) => {
  return (
    <section className={styles.hero}>
      <video muted autoPlay loop id="videoTag">
        <source src={video.src} type={video.type} />
      </video>
      {children}
      <ReserveUsButton whatsapp={contacts} />
    </section>
  );
};

export default Hero;
