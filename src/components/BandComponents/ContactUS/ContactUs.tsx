// components
import ContactUsTemplate from "../../../UI/Contact/ContactUsTemplate";
import SharedButton from "../../../UI/Buttons/SharedButton";
// staticData
import staticText from "./staticData.json";
import { useAppSelector } from "../../../app/hooks";

const ContactUs = () => {
   const bandNumber = useAppSelector((state) => state.getContacts.data.bandNumber!);

   return (
      <ContactUsTemplate
         heading={staticText.heading}
         paragraph={staticText.paragraph}
         secondHeading={staticText.secondHeading}
         button={<SharedButton whatsapp={bandNumber} classname="bandContactButton" text="Связаться с нами" />}
      />
   );
};

export default ContactUs;
