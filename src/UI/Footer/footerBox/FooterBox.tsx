import React, { FC } from "react";
import { NavLink } from "react-router-dom";

type FooterBox = {
  withLinks: boolean;
  p: string;
  li: { text: string; href: string }[] | string[];
};

interface FooterBoxProps extends React.HTMLAttributes<HTMLLIElement> {
  text: FooterBox;
}

const FooterBox: FC<FooterBoxProps> = ({ text, ...props }) => {
  const { p, li } = text;

  return (
    <li {...props}>
      <h5>{p}</h5>
      <ul>
        {li.map((el, i) =>
          typeof el === "string" ? (
            <li key={i}>
              <NavLink to="/studio/#about">{el}</NavLink>
            </li>
          ) : (
            <li key={i}>
              <NavLink to={el.href} target="blank">
                {el.text}
              </NavLink>
            </li>
          ),
        )}
      </ul>
    </li>
  );
};
export default FooterBox;
