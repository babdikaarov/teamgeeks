import { Route, Routes } from "react-router-dom";
import CoolBand from "./pages/CoolBand/CoolBand.tsx";
import Layout from "./components/Layout/Layout.tsx";
import Gallery from "./pages/Gallery/Gallery.tsx";
import Collage from "./pages/Collage/Collage.tsx";
import CoolStudio from "./pages/CoolStudio/CoolStudio.tsx";
// import { useEffect } from "react";

const App = () => {
   //  Temporary used for innerwidth tracking! can be deleted
   // useEffect(() => {
   //   const timerID = setInterval(() => {
   //     console.log(window.innerWidth);
   //   }, 1000);
   //   return () => {
   //     clearInterval(timerID);
   //   };
   // });

   return (
      <Layout>
         <Routes>
            <Route path="/" element={<CoolBand />} />
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
