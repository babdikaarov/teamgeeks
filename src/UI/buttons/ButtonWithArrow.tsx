import { Link, LinkProps } from "react-router-dom";
import arrow from "../../assets/icons/arrow";
import styles from "../../scss/partials/ui/buttons/_buttonWithArrow.module.scss";
import { FC } from "react";

interface ButtonWithArrowProps extends LinkProps {
  text: string;
}

const ButtonWithArrow: FC<ButtonWithArrowProps> = ({ text, ...props }) => {
  return (
    <Link {...props} className={styles.a}>
      <h6 className={styles.h6}>
        {text}
        {arrow}
      </h6>
    </Link>
  );
};

export default ButtonWithArrow;
