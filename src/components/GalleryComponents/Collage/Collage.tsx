import { useNavigate, useParams } from "react-router-dom";
import GalleryCollage from "../../../UI/Gallery/GalleryCollage";
import getGalleryData from "../../../tempData/getGalleyData";
import returnIcon from "../../../assets/icons/return";
import styles from "./_collage.module.scss";
import useResponsiveSorting from "../../../modules/hooks/useResponsiveSorting";
// FIXME add props to component from backend and types

// interface CollageProps {
//   eventID: number;
//   name: string;
//   date: string;
//   description: string;
//   poster: string;
//   items: {
//     alt: string;
//     src: string;
//     view: string;
//   }[];
// }

const Collage = () => {
   window.scroll(0, 0);
   const navigate = useNavigate();
   const { id } = useParams();
   // FIXME when backend ready
   // const sorted = getGalleryData.find((el) => el.eventID === Number(id))!;
   const sorted = getGalleryData[Number(id)];

   const sortedArray = useResponsiveSorting(sorted.items);
   return (
      <section className={styles.section}>
         <div className={styles.collageInfo}>
            <button onClick={() => navigate(-1)}>{returnIcon}</button>
            <div>
               <p>{sorted?.date}</p>
               <h3> {sorted?.name} </h3>
            </div>
         </div>
         <GalleryCollage items={sortedArray} />
      </section>
   );
};

export default Collage;
