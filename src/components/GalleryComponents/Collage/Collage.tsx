// modules
import { useNavigate, useParams } from "react-router-dom";
import useResponsiveSorting from "../../../modules/hooks/useResponsiveSorting";
// components
import GalleryCollage from "./GalleryCollage";
// styles
import styles from "./_collage.module.scss";
import getGalleryData from "../../../tempData/getGalleyData"; // FIX_ME replace with backend
import bigArrow from "../../../assets/icons/bigArrow";

const Collage = () => {
   window.scroll(0, 0);
   const navigate = useNavigate();
   const { id } = useParams();
   const sorted = getGalleryData[Number(id)];
   const sortedData = useResponsiveSorting(sorted.items);

   return (
      <section className={styles.section}>
         <div className={styles.collageInfo}>
            <button onClick={() => navigate(-1)}>{bigArrow}</button>
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
