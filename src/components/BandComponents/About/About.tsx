import AboutTemplate from "../../../UI/About/AboutTemplate";
import image from "/src/assets/about/about.jpg";
import text from "./text.json";

const About = () => {
  return <AboutTemplate header="Cool Show band" text={text} poster={image} />;
};
export default About;
