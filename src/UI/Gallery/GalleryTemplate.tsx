import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./gallery/_gallery.module.scss";
import { GalleryTemplateProps } from "./types";

const GalleryTemplate: FC<GalleryTemplateProps> = ({ galleryData }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
   const [events, setEvents] = useState(galleryData);
   useEffect(() => {
      if (galleryData) {
         setEvents(galleryData);
      }
   }, [galleryData]);

   return (
      <div className={styles.gallery}>
         {events.map((event, i) => (
            <React.Fragment key={event.eventID + i}>
               <div className={styles.galleryCards}>
                  {/* FIXME add a when backend will be ready */}
                  {/* <Link to={`/gallery/${event.eventID}`}> */}
                  <Link to={`/gallery/${i}`}>
                     {!imageLoaded && (
                        <div className={styles.loadingBox}>
                        </div>
                     )}
                     <img  
                        src={event.poster} alt={event.name}
                        onLoad={() => setImageLoaded(true)}
                        style={{ opacity: imageLoaded ? 1 : 0 }}
                     />
                     <img  />
                     <div className={styles.galleryCardsContent}>
                        <p>{event.date}</p>
                        <h4>{`Name ${i}`}</h4>
                     </div>
                  </Link>
               </div>
            </React.Fragment>
         ))}
      </div>
   );
};

export default GalleryTemplate;
