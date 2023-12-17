import { Link } from "react-router-dom";

function LogoCS() {
   return (
      <div id="studioLogo">
         <Link to="/">
            <img src="/coolStudioLogo.png" alt="CoolStudio" />
         </Link>
      </div>
   );
}

export default LogoCS;
