import ContactUsTemplate from "../../../UI/contactUs/ContactUsTemplate";
import ContactUsButton from "../../../UI/buttons/ContactUsButton";
import data from "../../../tempData/getContactUsData";

const ContactUs = () => {
  return (
    <ContactUsTemplate
      heading={data.bandPage.heading}
      paragraph={data.bandPage.paragraph}
      secondHeading={data.bandPage.secondHeading}
      button={<ContactUsButton whatsapp={""} />}
    />
  );
};

export default ContactUs;
