import React from "react";
import styles from "../_header.module.scss"
import { useNavigate } from "react-router-dom";

interface IPath {
   pathname: string;
}
const BurgerBtn:React.FC<IPath> = ({pathname}) => {

   const navigate = useNavigate();

   return (
      <>
         <button className={pathname === "/" ? styles.studioBtn : styles.bandBtn}
                 onClick={() => navigate(pathname === "/" ? "/studio" : "/")}>
            {
               pathname === "/" ? "Cool Studio" :
                  "Cool Show Band"
            }
         </button>
      </>
   );
};

export default BurgerBtn;