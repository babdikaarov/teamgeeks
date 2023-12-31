import AboutTemplate from "../../../UI/About/AboutTemplate";
import { aboutData } from "./getAboutData";
const About = () => {
  return <AboutTemplate header="Cool Show band" data={aboutData} />;
};
export default About;
