import { FC, useEffect, useState } from "react";
import styles from "../../scss/partials/ui/cards/_clientCard.module.scss";

interface ClientCardProps {
  card: {
    src: Promise<typeof import("*.png")>;
    alt: string;
  };
}

const ClientCard: FC<ClientCardProps> = ({ card }) => {
  const [resolvedSrc, setResolvedSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    card.src.then((importedSrc) => setResolvedSrc(importedSrc.default));
  }, [card.src]);

  function checkFileExtension(src: string | undefined): string {
    const regex = /\.png$/;
    return src && regex.test(src) ? styles.png : styles.NoPng;
  }

  return <img className={styles.clientCard + checkFileExtension(resolvedSrc)} src={resolvedSrc} alt={card.alt} />;
};

export default ClientCard;
