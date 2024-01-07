import ContactUsTemplate from "../../../UI/contactUs/ContactUsTemplate";
import ContactUsButton from "../../../UI/buttons/ContactUsButton";
import data from "../../../tempData/getContactUsData";
import { tempLinks } from "../../../tempData/getHeaderData";

const ContactUs = () => {
  return (
    <ContactUsTemplate
      heading={data.bandPage.heading}
      paragraph={data.bandPage.paragraph}
      secondHeading={data.bandPage.secondHeading}
      button={<ContactUsButton whatsapp={tempLinks.whatsapp} />}
    />
  );
};

export default ContactUs;
