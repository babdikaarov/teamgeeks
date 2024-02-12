import { HashLink } from "react-router-hash-link";

const FooterBox: React.FC<Prop.Footer.FooterBox> = (props) => {
   const { header, items, target } = props;

   return (
      <div {...props}>
         <h4>{header}</h4>
         <ul>
            {items.map((item, i: number) => (
               <li key={i}>
                  <HashLink
                     to={item.link as string}
                     target={target}
                  >
                     {item.text}
                  </HashLink>
               </li>
            ))}
         </ul>
      </div>
   );
};
export default FooterBox;
