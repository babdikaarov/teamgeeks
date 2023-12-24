import image1 from "../../../assets/Photocard.png";
import image2 from "../../../assets/Photocard(1).png";
import image3 from "../../../assets/Photocard(2).png";
import image4 from "../../../assets/Photocard(3).png";
import topImage from "../../../assets/Top.png";
import styles from "../../../scss/partials/coolBand/_ourevents.module.scss";

const OurEvents = () => {
   const images: string[] = [image1, image2, image3, image4, image1, image2];

   return (
      <div>
         <h3 className={styles.events}>Наши мероприятия</h3>
         <div className={styles.slider}>
            <img src={topImage} alt="#" className={styles.top} />
            <div className={styles.slideTrack}>
               {
                  images.map((every, index) => (
                     <img src={every} className={styles.slide} key={index} alt="#" />
                  ))
               }
               {
                  images.map((every, index) => (
                     <img src={every} className={styles.slide} key={index} alt="#" />
                  ))
               }
               {
                  images.map((every, index) => (
                     <img src={every} className={styles.slide} key={index} alt="#" />
                  ))
               }
            </div>
            <img src={topImage} alt="#" className={styles.bottom} />
         </div>
         <div className={styles.pDiv}>
            <p className={styles.toCont}>Подробнее</p>
         </div>
      </div>
   );
};

export default OurEvents;