import ContactUsTemplate from "../../../UI/contactUs/ContactUsTemplate";
import ContactUsButton from "../../../UI/buttons/ContactUsButton";
import data from "../../../tempData/getContactUsData";

const ContactUsStudio = () => {
   return (
      <ContactUsTemplate
         heading={data.studioPage.heading}
         paragraph={data.studioPage.paragraph}
         button={<ContactUsButton whatsapp={""} />}
      />
   );
};

export default ContactUsStudio;
