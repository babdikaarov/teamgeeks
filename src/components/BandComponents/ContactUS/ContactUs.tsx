import ContactUsTemplate from "../../../UI/contactUs/ContactUsTemplate";
import SharedButton from "../../../UI/buttons/SharedButton";
import staticData from "./staticData.json";
import contact from "../../../tempData/contacts.json";
// import backendData from "./backendData.json";
// import createWhatsAppLink from "../../../modules/createWhatsAppLink";


const ContactUs = () => {
   // const whatsapp = createWhatsAppLink(backendData.whatsapp.link, backendData.whatsapp.text);

   return (
      <ContactUsTemplate
         heading={staticData.heading}
         paragraph={staticData.paragraph}
         secondHeading={staticData.secondHeading}
         button={<SharedButton whatsapp={contact.bandNumber} classname="bandContactButton" text="Связаться с нами"/>}
      />
   );
};


export default ContactUs;