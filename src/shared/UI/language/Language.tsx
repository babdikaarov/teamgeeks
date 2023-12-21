import { useState } from "react";
import { langIcon } from "./icons";
export default function Language() {
   const [drop, setDrop] = useState(false);
   return (
      <div className="language" onClick={() => setDrop(!drop)}>
         <a href="#">{langIcon}</a>
         {drop && (
            <ul className="select-language">
               <li>KG</li>
               <li>RU</li>
               <li>EN</li>
            </ul>
         )}
      </div>
   );
}
