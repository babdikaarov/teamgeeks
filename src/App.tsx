import { Route, Routes } from "react-router-dom";
import CoolBand from "./pages/CoolBand/CoolBand.tsx";
import Layout from "./components/Layout/Layout.tsx";
import Gallery from "./pages/Gallery/Gallery.tsx";
import Collage from "./pages/Collage/Collage.tsx";
import CoolStudio from "./pages/CoolStudio/CoolStudio.tsx";

const App = () => {

   return (
      <Layout>
         <Routes>
            <Route path="/" element={<CoolBand />} />
            <Route path="/studio" element={<CoolStudio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/event" element={<Collage />} />
            <Route path="/studio" element={<CoolStudio />} />
            <Route path="/studio/gallery" element={<Gallery />} />
            <Route path="/studio/gallery/event" element={<Collage />} />
         </Routes>
      </Layout>
   );
};

export default App;
