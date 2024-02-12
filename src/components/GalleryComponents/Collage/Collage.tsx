// modules
import { useNavigate, useParams } from "react-router-dom";
import useResponsiveSorting from "../../../modules/hooks/useResponsiveSorting";
// components
import GalleryCollage from "./GalleryCollage";
import arrow_right_circle_fill from "../../../assets/icons/arrow_right_circle_fill";
// styles
import styles from "./_collage.module.scss";
import getGalleryData from "../../../tempData/getGalleyData"; // FIX_ME replace with backend

const Collage = () => {
   window.scroll(0, 0);
   const navigate = useNavigate();
   const { id } = useParams();
   const sorted = getGalleryData[Number(id)];
   const sortedData = useResponsiveSorting(sorted.items);

   return (
      <section className={styles.section}>
         <div className={styles.collageInfo}>
            <button onClick={() => navigate(-1)}>{arrow_right_circle_fill}</button>
            <div>
               <p>{sorted?.date}</p>
               <h3> {sorted?.name} </h3>
            </div>
         </div>
         <GalleryCollage items={sortedData} />
      </section>
   );
};

export default Collage;
