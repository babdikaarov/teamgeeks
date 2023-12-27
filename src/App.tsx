import { Route, Routes } from "react-router-dom";
import CoolBand from "./pages/CoolBand/CoolBand.tsx";
import CoolStudio from "./pages/CoolStudio/CoolStudio.tsx";
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<CoolBand />} />
            <Route path="/gallery" element={<></>} />
            <Route path="/gallery/event" element={<></>} />
            <Route path="/studio" element={<CoolStudio />} />
            <Route path="/studio/gallery" element={<></>} />
            <Route path="/studio/gallery/event" element={<></>} />
         </Routes>
      </>
   );
};

export default App;
