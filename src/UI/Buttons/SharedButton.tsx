import "./SharedButton.scss";
import createWhatsAppLink from "../../modules/createWhatsAppLink";
import phone from "../../assets/icons/phone";

const SharedButton: React.FC<Prop.ISharedProps> = ({ whatsapp, classname, text }) => {
   const whatsappText = createWhatsAppLink(whatsapp, text);

   return (
      <a
         href={whatsappText}
         target="blank"
         className={classname}
      >
         <button>
            {text} {phone}
         </button>
      </a>
   );
};

export default SharedButton;
