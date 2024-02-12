// components
import ContactUsTemplate from "../../../UI/ContactUs/ContactUsTemplate";
import SharedButton from "../../../UI/Buttons/SharedButton";
// staticData
import staticText from "./staticData.json";
import backendData from "./backendData.json"; // FIX_ME remove backendData.json and add backendData when ready

const ContactUs = () => {
   return (
      <ContactUsTemplate
         heading={staticText.heading}
         paragraph={staticText.paragraph}
         secondHeading={staticText.secondHeading}
         button={
            <SharedButton
               whatsapp={backendData.whatsapp.link.toString()}
               classname="bandContactButton"
               text="Связаться с нами"
            />
         }
      />
   );
};

export default ContactUs;
