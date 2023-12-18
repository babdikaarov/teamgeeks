import { Route, Routes } from "react-router-dom";
import App from "./App";
import CoolStudio from "../pages/coolStudio";
import CoolBandShow from "../pages/coolBandShow";
import CBMain from "../pages/coolBandShow/main";
import Gallery from "../pages/coolBandShow/gallery";
import CSMain from "../pages/coolStudio/main";
import EventsGallery from "../pages/coolStudio/eventsGallery";
import StudentsGallery from "../pages/coolStudio/studentsGallery";
function AppRoute() {
   return (
      <>
         <Routes>
            <Route path="" element={<App />}>
               <Route path="" element={<CoolBandShow />}>
                  <Route index element={<CBMain />} />
                  <Route path="gallery" element={<Gallery />} />
               </Route>
               <Route path="studio" element={<CoolStudio />}>
                  <Route index element={<CSMain />} />
                  <Route path="events" element={<EventsGallery />} />
                  <Route path="students" element={<StudentsGallery />} />
               </Route>
            </Route>
         </Routes>
      </>
   );
}

export default AppRoute;
