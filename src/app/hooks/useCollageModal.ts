import { useCallback, useEffect, useRef } from "react";

const useCollageModal = (
   index: number,
   arrayLength: number,
   setIndexImage: React.Dispatch<React.SetStateAction<number>>,
   nextPage: () => void,
) => {
   const dialogRef = useRef<HTMLDialogElement>(null);
   const imageRef = useRef<HTMLDivElement>(null);

   const handleClose: EventListener = useCallback(
      (event) => {
         const modal = event.currentTarget as HTMLDialogElement;
         const target = event.target as HTMLDialogElement;
         switch (target.id) {
            case "modal":
            case "modalClose":
               modal.setAttribute("closing", "");
               modal.addEventListener(
                  "animationend",
                  () => {
                     modal.removeAttribute("closing");
                     modal.close();
                  },
                  { once: true },
               );

               break;
            default:
               break;
         }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
   );

   useEffect(() => {
      const dialogElement = dialogRef.current;

      if (dialogElement) {
         dialogElement.addEventListener("click", handleClose);
      }

      return () => {
         if (dialogElement) {
            dialogElement.removeEventListener("click", handleClose);
         }
      };
   }, [dialogRef, handleClose]);

   useEffect(() => {
      const imageElement = imageRef.current;
      let imageRect;
      // const imageHeigh = imageElement.getClientRects()[0].height;
      // const imageWidth = imageElement.getClientRects()[0].width;
      // const moveSteps = 0;
      // let touchStartY = 0;
      let touchStartX = 0;
      let touchMoveEndX = 0;
      let touchMoveEndY = 0;
      let elementTop: number;
      let elementBottom: number;
      let elementLeft: number;
      let elementRight: number;
      if (imageElement) {
         imageRect = imageElement.getClientRects()[0];
         if (imageRect) {
            elementTop = imageRect.top;
            elementBottom = imageRect.bottom;
            elementLeft = imageRect.left;
            elementRight = imageRect.right;
         }
      }

      const handleTouchStart = (e: TouchEvent) => {
         if (e.touches.length > 0) {
            const firstTouch = e.touches[0];
            touchStartX = firstTouch.clientX;
            // touchStartY = firstTouch.clientY;
         }
      };

      const handleTouchMove = (e: TouchEvent) => {
         touchMoveEndX = e.changedTouches[e.changedTouches.length - 1].clientX;
         touchMoveEndY = e.changedTouches[e.changedTouches.length - 1].clientY;
      };

      const handleTouchEnd = () => {
         const isInsideY = touchMoveEndY >= elementTop && touchMoveEndY <= elementBottom;
         const isInsideX = touchMoveEndX >= elementLeft && touchMoveEndX <= elementRight;
         const swipeRight = touchStartX > touchMoveEndX;
         const swipeLeft = touchStartX < touchMoveEndX;
         // console.log(elementLeft + "left");
         // console.log(elementRight + "Right");
         // console.log(touchMoveEndX + "move end X");
         // console.log(isInsideX);
         if (isInsideY && isInsideX) {
            if (swipeRight) {
               setIndexImage(index + 1);
               if (index >= arrayLength - 1) {
                  nextPage();
               }
               //   console.log(index + "  modal index");
            }
            if (swipeLeft) {
               //   console.log(index + "  modal index");
               !(index === 0) && setIndexImage(index - 1);
            }
            // console.log(swipeLeft ? "swipte left" : swipeRight && "swipe right");
            // console.log(arrayLength + "  modal arraylength");
         }
         // reset all touch variables
         // moveSteps = 0;
         touchStartX = 0;
         // touchStartY = 0;
         touchMoveEndX = 0;
         touchMoveEndY = 0;
      };

      if (imageElement) {
         imageElement.addEventListener("touchstart", handleTouchStart, { passive: true });
         imageElement.addEventListener("touchmove", handleTouchMove, { passive: true });
         imageElement.addEventListener("touchend", handleTouchEnd, { passive: true });
      }

      return () => {
         if (imageElement) {
            imageElement.removeEventListener("touchstart", handleTouchStart);
            imageElement.removeEventListener("touchmove", handleTouchMove);
            imageElement.removeEventListener("touchend", handleTouchEnd);
         }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [index]);

   return { dialogRef, imageRef };
};

export default useCollageModal;
