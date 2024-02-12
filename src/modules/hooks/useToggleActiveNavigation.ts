import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAppDispatch } from "../../app/hooks";
import { toggleActiveNavigation } from "../../store/activeNavigationSlice";
import { EBlockID, EBlockIDType } from "../../globalTypesEnum";

const useToggleActiveNavigation = (blockId: EBlockIDType) => {
   const { ref, inView } = useInView({
      rootMargin: "-40% 0px -60% 0px",
   });

   const dispatch = useAppDispatch();

   useEffect(() => {
      if (inView) {
         dispatch(toggleActiveNavigation(blockId));
      } else {
         dispatch(toggleActiveNavigation(EBlockID.MAIN));
      }
      return () => {
         dispatch(toggleActiveNavigation(EBlockID.NONE));
      };

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [inView, dispatch]);

   return { inView, refToogle: ref };
};

export default useToggleActiveNavigation;
