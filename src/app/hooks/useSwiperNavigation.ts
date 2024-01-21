import { useRef, useCallback } from "react";
// import SwiperCore from "swiper";
// import { Swiper } from "swiper/react";

const useSwiperNavigation = () => {
   const sliderRef = useRef(null);

   const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      // @ts-ignore
      sliderRef.current.swiper.slidePrev();
   }, []);

   const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      // @ts-ignore
      sliderRef.current.swiper.slideNext();
   }, []);

   return { sliderRef, handlePrev, handleNext };
};

export default useSwiperNavigation;
