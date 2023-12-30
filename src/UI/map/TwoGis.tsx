import "https://maps.api.2gis.ru/2.0/loader.js?pkg=basic";
import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const DG: any;
export default function TwoGis() {
  const coolStudioLocation: number[] = [42.850329, 74.609962];
  const coolStudiolink: string = "https://2gis.kg/bishkek/firm/70000001066401992?m=74.609962%2C42.850329%2F16";

  useEffect(() => {
    if (DG) {
      initializeMap();
    }
  }, []);

  function initializeMap() {
    let map: { on: (arg0: string, arg1: () => void) => void };
    let myIcon;
    let marker: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [x: string]: any;
      bindPopup: (arg0: string) => void;
      openPopup: () => void;
    };
    const openOnHover = document.getElementById("map") as HTMLDivElement;

    DG.then(function () {
      if (map) return;
      map = DG.map("map", {
        center: coolStudioLocation,
        zoom: 17,
        minZoom: 12,
        maxZoom: 18,
      });
      // DG.marker(coolStudioLocation).addTo(map);
      map.on("click", function () {
        console.log("clicked");
        window.location.href = coolStudiolink;
      });

      //   Add Marker below

      //  Icon option
      myIcon = DG.icon({
        iconUrl: "/favicon.png",
        iconSize: [38, 38],
      });
      DG.marker(coolStudioLocation, {
        icon: myIcon,
      }).addTo(map);

      marker = DG.marker(coolStudioLocation).addTo(map);
      marker.bindPopup("Мы находимся здесь!");
      if (openOnHover) {
        openOnHover.onmouseover = () => marker.openPopup();
        openOnHover.onmouseout = () => marker.closePopup();
        openOnHover.onmousedown = () => marker.openPopup();
        openOnHover.onmouseup = () => marker.closePopup();
      }
    });
  }

  return <div id="map" className="map-container" style={{ width: "100%", height: "100%" }}></div>;
}
