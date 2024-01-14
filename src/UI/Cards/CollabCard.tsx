import { FC, useEffect, useState } from "react";
import styles from "./cards/_collabCard.module.scss";


interface CollabCardProps extends React.HTMLAttributes<HTMLDivElement> {
   src: Promise<typeof import("*.png")>;
   alt: string;
   firstName: string;
   lastName: string;
}


const CollabCard: FC<CollabCardProps> = ({ src, alt, firstName, lastName, ...props }) => {
   const [resolvedSrc, setResolvedSrc] = useState<string | undefined>(undefined);

   useEffect(() => {
      src.then((importedSrc) => setResolvedSrc(importedSrc.default));
   }, [src]);

   return (
      <div className={styles.collabCardContainer} {...props}>
         <img src={resolvedSrc} alt={alt} className={styles.collabCard} />
         <p>
            {firstName} {lastName}
         </p>
      </div>
   );
};

export default CollabCard;