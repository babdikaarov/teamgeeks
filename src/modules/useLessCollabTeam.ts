import { useMediaQuery } from "./hooks/useMediaQuery";

export const useLessCollabTeam = (size: number) => {
   const widthMore_1400 = useMediaQuery("(min-width: 1350px)");
   const widthMore_1025 = useMediaQuery("(min-width: 1025px)");
   const widthMore_830 = useMediaQuery("(min-width: 830px)");
   const widthMore_420 = useMediaQuery("(min-width: 420px)");
   if (widthMore_1400 && size === 5) {
      return { less: true, size, hide: false };
   } else if (widthMore_1025 && size === 4) {
      return { less: true, size, hide: false };
   } else if ((widthMore_830 && size === 3) || (widthMore_420 && size === 2)) {
      return { less: true, size, hide: true };
   } else {
      return { less: false, size: 6, hide: false };
   }
};
