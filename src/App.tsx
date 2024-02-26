import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import CoolBand from "./pages/CoolBand/CoolBand.tsx";
import CoolStudio from "./pages/CoolStudio/CoolStudio.tsx";
import GalleryPage from "./pages/Gallery/GalleryPage.tsx";
import CollagePage from "./pages/Collage/CollagePage.tsx";
import "./scss/partials/_variables.scss";
import useTitle from "./modules/hooks/useTitle.ts";
import useLocationDispatch from "./modules/hooks/useLocationDispatch.ts";

const App = () => {
   useTitle();
   useLocationDispatch();

   return (
      <Layout>
         <Routes>
            <Route
               path="/"
               element={<CoolBand />}
            />
            <Route
               path="/studio"
               element={<CoolStudio />}
            />
            <Route
               path="/gallery"
               element={<GalleryPage />}
            />
            <Route
               path="/gallery/:id"
               element={<CollagePage />}
            />
            <Route
               path="/studio"
               element={<CoolStudio />}
            />
            <Route
               path="/studio/gallery"
               element={<GalleryPage />}
            />
            <Route
               path="/studio/gallery/:id"
               element={<CollagePage />}
            />
            <Route
               path="*"
               element={<CoolBand />}
            />
         </Routes>
      </Layout>
   );
};

export default App;
