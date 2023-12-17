import { useState } from "react";

export default function Language() {
   const [drop, setDrop] = useState(false);
   return (
      <div id="language" onClick={() => setDrop(!drop)}>
         <img src="/assets/icons/world_2_fill.svg" alt="" />
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
