// modules
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import useResponsiveSorting from "../../../modules/hooks/useResponsiveSorting";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import GalleryCollage from "./GalleryCollage";
import bigArrow from "../../../assets/icons/bigArrow";
// styles
import styles from "./_collage.module.scss";
import { getAlbumByID, getAlbumImages } from "../../../store/thunkCollection";
import { useEffect } from "react";

const studioPattern = /^\/studio\/gallery\/\d+$/;

const Collage = () => {
   window.scroll(0, 0);
   const { pathname } = useLocation();
   const { id } = useParams();
   const dispatch = useAppDispatch();
   const bandImagesData = useAppSelector((state) => state.getAlbumImages.data!);
   const AlbumTittleByID = useAppSelector((state) => state.getAlbumByID.data!);

   // FIX_ME

   const navigate = useNavigate();
   const sortedData = useResponsiveSorting(bandImagesData);
   useEffect(() => {
      const endpoint = studioPattern.test(pathname) ? "studio" : "band";
      dispatch(getAlbumImages({ id: Number(id), endpoint }));
      dispatch(getAlbumByID({ id: Number(id), endpoint }));
   }, [dispatch, id, pathname]);

   return (
      <SectionWrapper className={styles.section}>
         <div className={styles.collageInfo}>
            <button
               onClick={() => navigate(-1)}
               aria-label="gallery-collage-button"
            >
               {bigArrow}
            </button>
            <div>
               <p>{AlbumTittleByID.date}</p>
               <h3>{AlbumTittleByID.name}</h3>
            </div>
         </div>
         <GalleryCollage items={sortedData} />
      </SectionWrapper>
   );
};

export default Collage;
