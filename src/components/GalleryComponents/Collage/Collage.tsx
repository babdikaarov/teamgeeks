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
// import NotFound from "../../../pages/NotFound/NotFound";

const Collage = () => {
   window.scroll(0, 0);
   const { pathname } = useLocation();

   const { id } = useParams();
   const dispatch = useAppDispatch();
   const albumImages = useAppSelector((state) => state.getAlbumImages!);
   const albumTittleByID = useAppSelector((state) => state.getAlbumByID!);
   const navigate = useNavigate();
   const sortedData = useResponsiveSorting(albumImages.data);
   const endpoint = pathname.includes("studio") ? "studio" : "band";

   useEffect(() => {
      dispatch(getAlbumImages({ id: Number(id), endpoint }));
      dispatch(getAlbumByID({ id: Number(id), endpoint }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   // if (id && id.match(/^\d+$/)) {
      
   // }
   // console.log(id);
   return (
      <SectionWrapper className={styles.section}>
         <div className={styles.collageInfo}>
            <button onClick={() => navigate(-1)} aria-label="gallery-collage-button">
               {bigArrow}
            </button>
            <div>
               <p>{albumTittleByID.data.date}</p>
               <h3>{albumTittleByID.data.name}</h3>
            </div>
         </div>
         {sortedData && <GalleryCollage items={sortedData} />}
      </SectionWrapper>
   );
};

export default Collage;
