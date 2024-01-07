import StudioContactUsButton from "../../../UI/buttons/StudioContactUsButton";
import ContactUsTemplate from "../../../UI/contactUs/ContactUsTemplate";
import data from "../../../tempData/getContactUsData";
import { tempLinks } from "../../../tempData/getHeaderData";
const ContactUsStudio = () => {
  return (
    <ContactUsTemplate
      heading={data.studioPage.heading}
      paragraph={data.studioPage.paragraph}
      button={<StudioContactUsButton whatsapp={tempLinks.whatsapp} />}
    />
  );
};

export default ContactUsStudio;
