import { useEffect, useState } from "react";
import AboutTemplate from "../../../UI/About/AboutTemplate";
import getAboutData from "../../../tempData/getAboutData";
type AboutData = {
   text: string;
   poster: Promise<typeof import("*.jpg")>;
};
const About = () => {
   const [data, setData] = useState<AboutData | undefined>();

   useEffect(() => {
      const loadImages = async () => {
         await new Promise(getAboutData).then((imported) => setData(imported.aboutBand));
      };

      loadImages();
   }, []);

   return <AboutTemplate header="Cool Show band" data={data} />;
};
export default About;
