import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./app";
import "./app/app.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <BrowserRouter>
      <AppRoute />
   </BrowserRouter>,
);
