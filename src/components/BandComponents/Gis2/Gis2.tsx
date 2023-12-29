import { load } from "@2gis/mapgl";
import React, { ReactNode, useEffect } from "react";
import styles from "../../../scss/partials/coolBand/_gis2.module.scss";

interface IProps {
   callToUs?: string;
   music?: string;
   toBook?: string;
   extraSpan?: string;
   btn?: ReactNode;
}

const Gis2: React.FC<IProps> = ({ callToUs, music, toBook, extraSpan, btn }) => {
   const MapWrapper = React.memo(
      () => {
         return <div id="map-container" className={styles.mapDiv} style={{ width: "612px", height: "461px" }}></div>;
      },
      () => true,
   );
   useEffect(() => {
      let map;
      load().then((mapglAPI) => {
         map = new mapglAPI.Map("map-container", {
            center: [74.609713, 42.850127],
            zoom: 17,
            minZoom: 12,
            key: "042b5b75-f847-4f2a-b695-b5f58adc9dfd",
         });
         new mapglAPI.Marker(map, {
            coordinates: [74.609962, 42.850329],
         });
      });


      return () => {
         return map && map.destroy();
      };
   }, []);

   return (
      <div className="container">
         <div className={styles.mainMapDiv}>
            <div className={styles.innerMapDiv}>
               <h4 className={styles.callToUs}>{callToUs}</h4>
               <p className={styles.music}>{music}</p>
               <span className={styles.toBook}>
                  {extraSpan}
               </span>
               <span className={styles.toBook}>
                  {toBook}
               </span>
               {btn}
            </div>
            <MapWrapper />
         </div>
      </div>
   );
};

export default Gis2;
