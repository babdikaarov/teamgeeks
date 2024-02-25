// modules
import { Link, useNavigate } from "react-router-dom";
import useToggleActiveNavigation from "../../../modules/hooks/useToggleActiveNavigation";
// components
import ImageLoader from "../../../UI/ImageLoader/ImageLoader";
import bigArrow from "../../../assets/icons/bigArrow";
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
// styles
import styles from "./_gallery.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";
import { useAppSelector } from "../../../app/hooks";
import usePageLocation from "../../../modules/hooks/usePageLocation";
// import useKeyPress from "../../../modules/hooks/useKeyPress";

const Gallery: React.FC = () => {
   const navigate = useNavigate();
   const { onStudio } = usePageLocation();
   const bandData = useAppSelector((state) => state.getBandAlbum.data!);
   const studioData = useAppSelector((state) => state.getStudioAlbum.data!);
   const { refToogle } = useToggleActiveNavigation(onStudio ? EBlockID.GALLERYSTUDIO : EBlockID.GALLERY);
   const redirectTo = onStudio ? "/studio/gallery" : "/gallery";
   // useKeyPress("a");  //use to togle between gallery pages

   return (
      <SectionWrapper
         forwardedRef={refToogle}
         className={styles.galleryWrapper}
      >
         <button
            aria-label="button"
            onClick={() => navigate(-1)}
            className={styles.navigation}
         >
            {bigArrow}
         </button>
         <div className={styles.gallery}>
            {(onStudio ? studioData : bandData).map((event) => (
               <div
                  className={styles.galleryCards}
                  key={event.id}
               >
                  <Link
                     to={`${redirectTo}/${event.id}`}
                     className={styles.image_container}
                  >
                     <ImageLoader
                        src={event.coverImage}
                        bluer={event.bluer}
                     />
                     <div className={styles.galleryCardsContent}>
                        <p>{event.date}</p>
                        <h4>{event.name}</h4>
                     </div>
                  </Link>
               </div>
            ))}
         </div>
      </SectionWrapper>
   );
};

export default Gallery;
