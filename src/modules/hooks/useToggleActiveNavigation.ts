import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAppDispatch } from "../../app/hooks";
import { toggleActiveNavigation } from "../../store/activeNavigationSlice";
import { EBlockID } from "../../types";

const useToggleActiveNavigation = (blockId: EBlockID) => {
   const { ref, inView } = useInView({
      rootMargin: "-40% 0px -60% 0px",
   });

   const dispatch = useAppDispatch();

   useEffect(() => {
      if (inView) {
         dispatch(toggleActiveNavigation(blockId));
      } else {
         dispatch(toggleActiveNavigation(EBlockID.Main));
      }
      return () => {
         dispatch(toggleActiveNavigation(EBlockID.None));
      };

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [inView, dispatch]);

   return { inView, refToogle: ref };
};

export default useToggleActiveNavigation;
