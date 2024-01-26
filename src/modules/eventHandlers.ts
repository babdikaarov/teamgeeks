export const mouseOverLeave = (tabletSize: boolean) => {
   const mouseOver: React.MouseEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();

      if (tabletSize) {
         const card = e.currentTarget as HTMLDivElement;
         const grandparent = card.parentElement?.parentElement;
         if (grandparent) {
            const firstSibling = grandparent.childNodes[0].childNodes[0] as HTMLDivElement;
            firstSibling.classList.remove("firstAnimate");
         }
         card.setAttribute("flipMouse", "");
      }
   };

   const mouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();

      if (tabletSize) {
         const card = e.currentTarget as HTMLDivElement;
         card.removeAttribute("flipMouse");
      }
   };

   return { onMouseEnter: mouseOver, onMouseLeave: mouseLeave };
};

export const mouseClickOut = (tabletSize: boolean) => {
   const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
      if (tabletSize) {
         const card = e.currentTarget as HTMLDivElement;

         const hasAttribute = card.hasAttribute("flipTouch");
         const grandparent = card.parentElement?.parentElement;
         if (grandparent) {
            const firstSibling = grandparent.childNodes[0].childNodes[0] as HTMLDivElement;
            firstSibling.classList.remove("firstAnimate");
            Array.from(grandparent.childNodes).forEach((child: Node) => {
               const sibling = child.childNodes[0] as HTMLDivElement;
               sibling.removeAttribute("flipTouch");
            });
         }

         if (hasAttribute) {
            console.log("remove");
            card.removeAttribute("flipTouch");
         } else {
            card.setAttribute("flipTouch", "");
         }
      }
   };

   const handleOut: React.MouseEventHandler<HTMLDivElement> = (e) => {
      if (tabletSize) {
         const card = e.currentTarget as HTMLDivElement;
         card.removeAttribute("flipTouch");
      }
   };

   return { onClick: handleClick, onMouseOut: handleOut };
};

export default {
   mouseOverLeave,
   mouseClickOut,
};

// export const touchStartEnd = (tabletSize: boolean) => {
//    const handleStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
//       e.preventDefault();

//       if (tabletSize) {
//          const card = e.currentTarget as HTMLDivElement;
//          card.setAttribute("flipTouch", "");
//       }
//    };

//    const handleEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
//       e.preventDefault();

//       if (tabletSize) {
//          const card = e.currentTarget as HTMLDivElement;
//          card.removeAttribute("flipTouch");
//       }
//    };

//    return { onTouchStart: handleStart, onTouchEnd: handleEnd };
// };

// export const mouseDownUp = (tabletSize: boolean) => {
//    const mouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
//       e.preventDefault();

//       if (tabletSize) {
//          const card = e.currentTarget as HTMLDivElement;
//          card.setAttribute("flipMouse", "");
//       }
//    };

//    const mouseUp: React.MouseEventHandler<HTMLDivElement> = (e) => {
//       e.preventDefault();

//       if (tabletSize) {
//          const card = e.currentTarget as HTMLDivElement;
//          card.removeAttribute("flipMouse");
//       }
//    };
//    return { onMouseDown: mouseDown, onMouseUp: mouseUp };
// };
