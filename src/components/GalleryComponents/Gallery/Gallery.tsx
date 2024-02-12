// modules
import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
// components
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";
// styles
import styles from "./_gallery.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";
import getGalleryData from "../../../tempData/getGalleyData"; //FIX_ME replace with backend

const Gallery: React.FC = () => {
   const [events, setEvents] = useState(getGalleryData);
   const { pathname } = useLocation();
   const onStudio = pathname.match("studio");
   const { refToogle } = useToggleActiveNavigation(onStudio ? EBlockID.GALLERYSTUDIO : EBlockID.GALLERY);

   useEffect(() => {
      if (getGalleryData) {
         setEvents(getGalleryData);
      }
   }, []);

   return (
      <section
         ref={refToogle}
         className={styles.gallery}
      >
         {events.map((event, i) => (
            <Fragment key={event.eventID + i}>
               <div className={styles.galleryCards}>
                  {/* FIXME add at backend stage */}
                  {/* <Link to={`/gallery/${event.eventID}`}> */}
                  <Link
                     to={`/gallery/${i}`}
                     className={styles.image_container}
                  >
                     <ImageLoader src={event.poster} />
                     <div className={styles.galleryCardsContent}>
                        <p>{event.date}</p>
                        <h4>{`Name ${i}`}</h4>
                     </div>
                  </Link>
               </div>
            </Fragment>
         ))}
      </section>
   );
};

export default Gallery;
