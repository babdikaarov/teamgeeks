import "https://maps.api.2gis.ru/2.0/loader.js?pkg=basic";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import bandIcon from "/bandFavicon.svg";
import studioIcon from "/studioFavicon.svg";
// import styles from "./_twoGis.module.scss";
// import ImageLoader from "../ImageLoader/ImageLoader";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const DG: any;

export default function TwoGis() {
   const { pathname } = useLocation();
   const [mapLoaded, setMapLoaded] = useState(false);

   // FIXME the Location coordinates and link static attachment or backend provider
   const coolStudioLocation: number[] = [42.850329, 74.609962];
   const coolStudiolink: string = "https://2gis.kg/bishkek/firm/70000001066401992?m=74.609962%2C42.850329%2F16";

   useEffect(() => {
      if (DG) {
         initializeMap();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      if (mapLoaded) {
         // Handle map loading completion here
         console.log("Map has been loaded!");
      }
   }, [mapLoaded]);

   function initializeMap() {
      let map: { on: (arg0: string, arg1: () => void) => void };
      let myIcon;
      let marker: {
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         [x: string]: any;
         bindPopup: (arg0: string) => void;
         openPopup: () => void;
         closePopup: () => void;
      };
      const mapElement = document.getElementById("map") as HTMLDivElement;

      DG.then(function () {
         if (map) return;
         map = DG.map("map", {
            center: coolStudioLocation,
            zoom: 17,
            minZoom: 12,
            maxZoom: 18,
         });

         // Set the map as loaded
         setMapLoaded(true);

         map.on("click", function () {
            console.log("clicked");
            window.location.href = coolStudiolink;
         });

         //   Add Marker below

         //  Icon option
         myIcon = DG.icon({
            iconUrl: /^\/(?!studio\b).*$/.test(pathname) ? bandIcon : studioIcon,
            iconSize: [38, 38],
         });
         DG.marker(coolStudioLocation, {
            icon: myIcon,
         }).addTo(map);

         marker = DG.marker(coolStudioLocation).addTo(map);
         marker.bindPopup("Мы находимся здесь!");

         if (mapElement) {
            // mapElement.onmouseout = () => marker.closePopup;
            // mapElement.onmouseover = () => marker.openPopup;
            // FIXME check with team hover beahvior
            mapElement.onmouseover = () => marker.openPopup();
            mapElement.onmouseout = () => marker.closePopup();
         }

         // FIXME violation. somtimes warning poping up sometimes not
         /* script.basic.js:16543 [Violation] Added non-passive event listener to a scroll-blocking 'wheel' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952 */
         // if (mapElement) {
         //   DG.DomEvent.on(mapElement, "mouseover", marker.openPopup, { passive: true });
         //   DG.DomEvent.on(mapElement, "mouseout", marker.closePopup, { passive: true });
         // }
      });
   }

   return (
      <div
         id="map"
         className="map-container"
         style={{ width: "100%", height: "100%", position: "relative" }}
      >
         {/* FIXME finish the logic on map loaded and provide hashbluer generated from map screenshot */}
         {/* <ImageLoader/> */}
      </div>
   );
}
