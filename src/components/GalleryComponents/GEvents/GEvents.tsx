import { useNavigate } from "react-router-dom";
import image from "../../../assets/Image.png";
import styles from "../../../scss/partials/gallery/_gevents.module.scss";
const GEvents = () => {

   const imgArray = [image, image, image, image, image, image, image, image, image, image, image, image];

   const navigate = useNavigate()

   return (
      <div className="container">
         <div className={styles.mainDiv}>
            {
               imgArray.map((every, i) => (
                  <div className={styles.mainImgDiv}>
                     <img src={every} key={i} onClick={() => navigate("/gallery/event")} className={styles.images}
                          alt="#" />
                     <div className={styles.spanDiv}>
                        <span className={styles.date}>Date</span>
                        <span className={styles.name}>Name</span>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export default GEvents;