import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import CoolBand from "./pages/CoolBand/CoolBand.tsx";
import CoolStudio from "./pages/CoolStudio/CoolStudio.tsx";
import GalleryPage from "./pages/Gallery/GalleryPage.tsx";
import CollagePage from "./pages/Collage/CollagePage.tsx";
import "./scss/partials/_variables.scss";
import useTitle from "./modules/hooks/useTitle.ts";

const App = () => {
   // export routepath and make it as a variables FIXME
   useTitle();
   return (
      <Layout>
         {/* <div style={{margin: "25% 0px 25% 0px", background:"white", opacity: "0.7", position: "fixed", width: "100%",
      height: "100vw", transform: "translate(-50%, -50%)", left:"50%", top: "50%"
      }}></div> */}
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
         </Routes>
      </Layout>
   );
};

export default App;
