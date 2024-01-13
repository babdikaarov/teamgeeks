import ContactUsTemplate from "../../../UI/contactUs/ContactUsTemplate";
import ContactUsButton from "../../../UI/buttons/ContactUsButton";
import staticData from "./staticData.json";
import backendData from "./backendData.json";
import createWhatsAppLink from "../../../modules/createWhatsAppLink";

const ContactUs = () => {
   const whatsapp = createWhatsAppLink(backendData.whatsapp.link, backendData.whatsapp.text);

   return (
      <ContactUsTemplate
         heading={staticData.heading}
         paragraph={staticData.paragraph}
         secondHeading={staticData.secondHeading}
         button={<ContactUsButton whatsapp={whatsapp} />}
      />
   );
};

export default ContactUs;
