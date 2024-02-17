import { Link, LinkProps } from "react-router-dom";
import styles from "./_buttonWithArrow.module.scss";
import mainElementAnimation from "../../../modules/mainElementAnimation";
import arrow_right_circle_fill from "../../../assets/icons/arrow_right_circle_fill";

const ButtonWithArrow: React.FC<Prop.ButtonWithArrowProps & LinkProps> = ({ text, ...props }) => {
   return (
      <Link
         {...props}
         className={styles.a}
         onClick={mainElementAnimation}
      >
         <h6 className={styles.h6}>
            {text} {arrow_right_circle_fill}
         </h6>
      </Link>
   );
};

export default ButtonWithArrow;
