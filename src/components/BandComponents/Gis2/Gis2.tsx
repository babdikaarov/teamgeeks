import { load } from "@2gis/mapgl";
import React, { useEffect } from "react";

const Gis2 = () => {
   const MapWrapper = React.memo(
      () => {
         return <div id="map-container" style={{ width: "612px", height: "461px" }}></div>;
      },
      () => true,
   );
   useEffect(() => {
      let map: any;
      load().then((mapglAPI) => {
         map = new mapglAPI.Map("map-container", {
            center: [74.609713, 42.850127],
            zoom: 17,
            key: "042b5b75-f847-4f2a-b695-b5f58adc9dfd",
         });
         new mapglAPI.Marker(map, {
            coordinates: [74.609890, 42.850100],
         });
      });

      return () => {
         return map && map.destroy();
      };
   }, []);

   return (
      <div className="container">
         <div className="mainMapDiv">
            <div className="innerMapDiv">
               <h4 className="callToUs">Связаться с нами</h4>
               <p className="music">
                  Не теряй связь с музыкой!
               </p>
               <div className="toBook">
               <span>
               Чтобы забронировать выступление Coolshowband отправьте
               нам  сообщение на WhatsApp. Мы свяжемся с вами в ближайшее время
               и ответим на все интересующие вас вопросы
               </span>
               </div>
               <button className="btnCall">
                  Связаться с нами
               </button>
            </div>
            <MapWrapper />
         </div>
      </div>
   );
};

export default Gis2;
