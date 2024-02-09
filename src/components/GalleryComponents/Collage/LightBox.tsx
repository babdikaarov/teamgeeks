import { useEffect } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useMediaQuery } from "../../../modules/hooks/useMediaQuery";
import "./yarl.scss";
/*
 */
interface ILightBoxProp {
   index: number;
   open: boolean;
   setOpen: (arg: boolean) => void;
   setIndex: (arg: number) => void;
   images: SlideImage[];
   nextPage: () => void;
}
const LightBox: React.FC<ILightBoxProp> = (props) => {
   const { index, open, setOpen, setIndex, images, nextPage } = props;
   const mobileSize = useMediaQuery("(max-width: 576px)");
   // FIX_ME when api transfer covertation logic here refer to higher order component
   //    const slideImages = images.map((el) => (el ? { src: el.src } : null)).filter((el): el is SlideImage => el !== null);

   useEffect(() => {
      if (index === images.length - 1) {
         nextPage();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [index]);

   const styles = {
      button: { "--yarl__color_button": "gold" },
      navigationPrev: { color: "white", "--yarl__icon_size": !mobileSize ? "100px" : "50px" },
      navigationNext: { color: "white", "--yarl__icon_size": !mobileSize ? "100px" : "50px" },
      container: { "--yarl__color_backdrop": "rgba(0, 0, 0, 0.8)" },
   };

   return (
      <Lightbox
         index={index}
         styles={styles}
         on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
         open={open}
         close={() => setOpen(false)}
         slides={images}
      />
   );
};

export default LightBox;
