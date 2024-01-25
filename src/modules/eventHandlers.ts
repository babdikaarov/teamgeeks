export const touchStartEnd = (tabletSize: boolean) => {
   const handleStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
      if (tabletSize) {
         const card = e.currentTarget as HTMLDivElement;
         card.setAttribute("flipTouch", "");
      }
   };

   const handleEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
      if (tabletSize) {
         const card = e.currentTarget as HTMLDivElement;
         card.removeAttribute("flipTouch");
      }
   };

   return { onTouchStart: handleStart, onTouchEnd: handleEnd };
};

export const mouseOverLeave = (tabletSize: boolean) => {
   const mouseOver: React.MouseEventHandler<HTMLDivElement> = (e) => {
      if (!tabletSize) {
         const card = e.currentTarget as HTMLDivElement;
         card.setAttribute("flipMouse", "");
      }
   };

   const mouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
      if (!tabletSize) {
         const card = e.currentTarget as HTMLDivElement;
         card.removeAttribute("flipMouse");
      }
   };

   return { onMouseEnter: mouseOver, onMouseLeave: mouseLeave };
};
export const mouseDownUp = (tabletSize: boolean) => {
   const mouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
      if (!tabletSize) {
         const card = e.currentTarget as HTMLDivElement;
         card.setAttribute("flipMouse", "");
      }
   };

   const mouseUp: React.MouseEventHandler<HTMLDivElement> = (e) => {
      if (!tabletSize) {
         const card = e.currentTarget as HTMLDivElement;
         card.removeAttribute("flipMouse");
      }
   };
   return { onMouseDown: mouseDown, onMouseUp: mouseUp };
};

// export const touchStartEnd = (tabletSize: boolean) => {
//    const handleStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
//       if (tabletSize) {
//          const card = e.currentTarget as HTMLDivElement;
//          card.setAttribute("flipTouch", "");
//       }
//    };

//    const handleEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
//       if (tabletSize) {
//          const card = e.currentTarget as HTMLDivElement;
//          card.removeAttribute("flipTouch");
//       }
//    };

//    return { onTouchStart: handleStart, onTouchEnd: handleEnd };
// };

export default {
   mouseOverLeave,
   touchStartEnd,
   mouseDownUp,
};
