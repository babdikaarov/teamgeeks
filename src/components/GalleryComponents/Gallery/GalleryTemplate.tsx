import React, { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./_gallery.module.scss";
import { GalleryTemplateProps } from "../types";
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
import { EBlockID } from "../../../types";

const GalleryTemplate: FC<GalleryTemplateProps> = ({ galleryData }) => {
   const [events, setEvents] = useState(galleryData);
   const { pathname } = useLocation();
   const onStudio = pathname.match("studio");
   const { refToogle } = useToggleActiveNavigation(onStudio ? EBlockID.GalleryStudio : EBlockID.Gallery);

   useEffect(() => {
      if (galleryData) {
         setEvents(galleryData);
      }
   }, [galleryData]);

   return (
      <div
         ref={refToogle}
         className={styles.gallery}
      >
         {events.map((event, i) => (
            <React.Fragment key={event.eventID + i}>
               <div className={styles.galleryCards}>
                  {/* FIXME add a when backend will be ready */}
                  {/* <Link to={`/gallery/${event.eventID}`}> */}
                  <Link to={`/gallery/${i}`} className={styles.image_container}>
                     <ImageLoader src={event.poster} />
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
