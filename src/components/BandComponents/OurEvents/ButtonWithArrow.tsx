import { Link, LinkProps } from "react-router-dom";
import styles from "./_buttonWithArrow.module.scss";
import mainElementAnimation from "../../../modules/mainElementAnimation";
import arrow_right_circle_fill from "../../../assets/icons/arrow_right_circle_fill";

const ButtonWithArrow: React.FC<Prop.ButtonWithArrowProps & LinkProps> = ({ text, ...props }) => {
   return (
      <Link {...props} className={styles.a} onClick={mainElementAnimation}>
         <div className={styles.h6}>
            {text} {arrow_right_circle_fill}
         </div>
      </Link>
   );
};

export default ButtonWithArrow;
