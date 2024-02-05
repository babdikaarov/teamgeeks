import "./buttons/_sharedButton.scss"
import phone from "../../assets/icons/phone";
import createWhatsAppLink from "../../modules/createWhatsAppLink";


interface ISharedProps {
   whatsapp: string;
   classname: string;
   text: string;
};


const SharedButton: React.FC<ISharedProps> = ({ whatsapp, classname, text }) => {
   const whatsappText = createWhatsAppLink(whatsapp, text);

   return (
      <a href={whatsappText} target="blank" className={classname}>
         <button>{text} {phone}</button>
      </a>
   );
};


export default SharedButton;