import AboutTemplate from "../../../UI/About/AboutTemplate";
import { aboutData } from "../../../tempData/getAboutData";
const About = () => {
  return <AboutTemplate header="Cool Show band" data={aboutData.aboutBand} />;
};
export default About;
