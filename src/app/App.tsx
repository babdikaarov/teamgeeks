// import "./app.scss";
import { Outlet } from "react-router-dom";

function App() {
   return (
      <>
         <div>App</div>
         <Outlet />
      </>
   );
}

export default App;

// <Route path="" element={<CoolBand />}>
//     <Route index element={<Main />}></Route>
//     <Route path="events" element={<Gallery />}>
//         <Route index element={<GalleryCards />}></Route>
//         {/* <Route index element={<GalleryCards2 />}></Route> */}
//         <Route path=":id" element={<GalleryCard />}></Route>
//     </Route>
// </Route>
// <Route path="studio" element={<CoolStudio />}></Route>
