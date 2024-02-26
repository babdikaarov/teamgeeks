// modules
import { useEffect } from "react";
import { useMediaQuery } from "../../../modules/hooks/useMediaQuery";
// yarl
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./yarl.scss";

interface ISlideImage {
   images: Slice.IGetBandImages[];
}
const LightBox: React.FC<Prop.Collage.ILightBoxProp & ISlideImage> = (props) => {
   const { index, open, setOpen, setIndex, images, nextPage } = props;

   const mobileSize = useMediaQuery("(max-width: 576px)");
   const slideImages = images
      .map((el) => (el ? { src: el.image } : null))
      .filter((el): el is SlideImage => el !== null);

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
         controller={{
            closeOnBackdropClick: true,
            closeOnPullUp: true,
            closeOnPullDown: true,
         }}
         animation={{ fade: 300, swipe: 500 }}
         index={index}
         styles={styles}
         on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
         open={open}
         close={() => setOpen(false)}
         slides={slideImages}
      />
   );
};

export default LightBox;
