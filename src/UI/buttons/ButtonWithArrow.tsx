import { Link, LinkProps } from "react-router-dom";
import styles from "./buttons/_buttonWithArrow.module.scss";
import mainElementAnimation from "../../modules/mainElementAnimation";
import arrow_right_circle_fill from "../../assets/icons/arrow_right_circle_fill";

interface ButtonWithArrowProps extends LinkProps {
   text: string;
}

const ButtonWithArrow: React.FC<ButtonWithArrowProps> = ({ text, ...props }) => {
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
