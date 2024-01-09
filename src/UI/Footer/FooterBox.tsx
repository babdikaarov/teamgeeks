import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { FooterBoxProps } from "./types";

const FooterBox: FC<FooterBoxProps> = (props) => {
  const { header, items, target } = props;

  return (
    <div {...(props as HTMLAttributes<HTMLDivElement>)}>
      <h4>{header}</h4>
      <ul>
        {items.map((item, i: number) => (
          <li key={i}>
            <HashLink to={item.link as string} target={target}>
              {item.text}
            </HashLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterBox;
