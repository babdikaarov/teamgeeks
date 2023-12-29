import styles from "../../scss/partials/gallery/_collage.module.scss";
import img1 from "../../assets/Collage(.png";
import img2 from "../../assets/Collage(1).png";
import img3 from "../../assets/Collage(2).png";
import img4 from "../../assets/Collage(3).png";
import img5 from "../../assets/Collage(4).png";
import img6 from "../../assets/Collage(5).png";
import img7 from "../../assets/Collage(6).png";
import img8 from "../../assets/Collage(7).png";
import { useNavigate } from "react-router-dom";

const Collage = () => {
   const data = [{
      id: 1,
      src: img1,
   }, {
      id: 2,
      src: img2,
   }, {
      id: 3,
      src: img3,
   }, {
      id: 4,
      src: img4,
   }, {
      id: 5,
      src: img5,
   }, {
      id: 6,
      src: img6,
   }, {
      id: 7,
      src: img7,
   }, {
      id: 8,
      src: img8,
   },];

   const navigate = useNavigate();

   return (
      <>
         <div className={styles.collage}>
            <h3 onClick={() => navigate("/gallery")}>Exit</h3>
            {
               data.map((every, i) => (
                  <div className={styles.pics} key={i}>
                     <img src={every.src} alt="#" />
                  </div>
               ))
            }
         </div>
      </>
   );
};

export default Collage;
