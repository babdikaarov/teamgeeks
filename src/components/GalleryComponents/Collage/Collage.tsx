// modules
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import useResponsiveSorting from "../../../modules/hooks/useResponsiveSorting";
import { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
// components
import SectionWrapper from "../../../UI/SectionWrapper/SectionWrapper";
import GalleryCollage from "./GalleryCollage";
import bigArrow from "../../../assets/icons/bigArrow";
// styles
import styles from "./_collage.module.scss";
import { getAlbumByID, getAlbumImages } from "../../../store/thunkCollection";

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
      const fetchData = async () => {
         try {
            unwrapResult(await dispatch(getAlbumImages({ id: Number(id), endpoint })));
            unwrapResult(await dispatch(getAlbumByID({ id: Number(id), endpoint })));
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
         } catch (rejectedValueOrSerializedError: any) {
            console.log(rejectedValueOrSerializedError.code);
            navigate(pathname.includes("studio") ? "/studio/error" : "/error");
         }
      };
      fetchData();

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   // useEffect(()=>{
   //    if (!albumImages.getLoading || !albumTittleByID.getLoading){
   //       navigate(`/${endpoint}error`)
   //    }
   // },[dispatch])

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
