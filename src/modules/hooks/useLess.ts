import { useMediaQuery } from "./useMediaQuery";

export const useLessCollabTeam = (size: number) => {
   const widthMore_1400 = useMediaQuery("(min-width: 1350px)");
   const widthMore_1025 = useMediaQuery("(min-width: 1025px)");
   const widthMore_830 = useMediaQuery("(min-width: 830px)");
   const widthMore_420 = useMediaQuery("(min-width: 420px)");
   if (widthMore_1400 && size === 5) {
      return { less: true, size, hide: false };
   } else if (widthMore_1025 && size === 4) {
      return { less: true, size, hide: false };
   } else if ((widthMore_830 && size === 3) || (widthMore_420 && size <= 2)) {
      return { less: true, size, hide: true };
   } else {
      return { less: false, size: 6, hide: false };
   }
};

export const useLessConcertSuccess = (size: number) => {
   const widthMore_1260 = useMediaQuery("(min-width: 1260px)");
   const widthMore_705 = useMediaQuery("(min-width: 705px)");
   const widthMore_577 = useMediaQuery("(min-width: 577px)");

   if (widthMore_1260 && size === 3) {
      return { less: true, size, hide: true };
   } else if (widthMore_705 && size === 2) {
      return { less: true, size, hide: true };
   } else if (widthMore_577 && size === 1) {
      return { less: true, size, hide: true };
   } else {
      return { less: false, size: undefined, hide: false };
   }
};
export const useLessTeachers = (size: number) => {
   const widthMore_652 = useMediaQuery("(min-width: 652px)");
   const widthMore_430 = useMediaQuery("(min-width: 430px)");
   const widthMore_275 = useMediaQuery("(min-width: 250px)");

   if (widthMore_652 && size === 3) {
      return { less: true, center: true, hide: true };
   } else if (widthMore_430 && size === 2) {
      return { less: true, center: true, hide: true };
   } else if (widthMore_275 && size === 1) {
      return { less: true, center: true, hide: true };
   } else {
      return { less: false, center: undefined, hide: false };
   }
};
