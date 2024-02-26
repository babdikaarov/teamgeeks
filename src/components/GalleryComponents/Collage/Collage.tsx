// modules
import { useNavigate, useParams } from "react-router-dom";
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
import usePageLocation from "../../../modules/hooks/usePageLocation";

const Collage = () => {
   window.scroll(0, 0);
   const { onStudio } = usePageLocation();
   const { id } = useParams();
   const dispatch = useAppDispatch();
   const albumImages = useAppSelector((state) => state.getAlbumImages.data!);
   const albumTittleByID = useAppSelector((state) => state.getAlbumByID.data!);
   const navigate = useNavigate();
   const sortedData = useResponsiveSorting(albumImages);
   const endpoint = onStudio ? "studio" : "band";

   useEffect(() => {
      dispatch(getAlbumImages({ id: Number(id), endpoint }));
      dispatch(getAlbumByID({ id: Number(id), endpoint }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

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
               <p>{albumTittleByID.date}</p>
               <h3>{albumTittleByID.name}</h3>
            </div>
         </div>
         <GalleryCollage items={sortedData} />
      </SectionWrapper>
   );
};

export default Collage;
