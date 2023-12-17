import { HashLink } from "react-router-hash-link";

function LogoCB() {
   return (
      <HashLink to="/#main">
         <h1 id="bandLogo">
            <img src="/coolbandLogo.png" alt="CoolBand" />
         </h1>
      </HashLink>
   );
}

export default LogoCB;
