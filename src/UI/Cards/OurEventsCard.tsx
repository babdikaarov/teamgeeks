import { FC, useEffect, useState } from "react";

interface OurEventsCardProps {
   src: Promise<typeof import("*.jpg")>;
   alt: string;
}

const OurEventsCard: FC<OurEventsCardProps> = ({ src, alt }) => {
   const [resolvedSrc, setResolvedSrc] = useState<string | undefined>(undefined);

   useEffect(() => {
      src.then((importedSrc) => setResolvedSrc(importedSrc.default));
   }, [src]);
   return (
      <div>
         <img src={resolvedSrc} alt={alt} />
      </div>
   );
};

export default OurEventsCard;
