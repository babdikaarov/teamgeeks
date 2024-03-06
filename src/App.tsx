import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import CoolBand from "./pages/CoolBand/CoolBand.tsx";
import CoolStudio from "./pages/CoolStudio/CoolStudio.tsx";
import GalleryPage from "./pages/Gallery/GalleryPage.tsx";
import CollagePage from "./pages/Collage/CollagePage.tsx";
import "./scss/partials/_variables.scss";
import useTitle from "./modules/hooks/useTitle.ts";
import useLocationDispatch from "./modules/hooks/useLocationDispatch.ts";
import NotFound from "./pages/NotFound/NotFound.tsx";

const App = () => {
   useTitle();
   useLocationDispatch();

   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<CoolBand />} />
            <Route path="studio" element={<CoolStudio />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="gallery/:id" element={<CollagePage />} />
            <Route path="studio/gallery" element={<GalleryPage />} />
            <Route path="studio/gallery/:id" element={<CollagePage />} />
         </Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
};

export default App;
