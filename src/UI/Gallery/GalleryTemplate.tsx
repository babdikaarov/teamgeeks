import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./gallery/_gallery.module.scss";
import { GalleryTemplateProps } from "./types";

const GalleryTemplate: FC<GalleryTemplateProps> = ({ galleryData }) => {
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
              <img src={event.poster} alt={event.name} />
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
