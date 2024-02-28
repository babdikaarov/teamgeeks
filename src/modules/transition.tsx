export const logoAnimation = (onStudio: boolean) => {
   const target = document.getElementById("logoRotate");
   target?.getAttribute("data-rotate");
   if (onStudio) {
      console.log("false");
      target?.setAttribute("data-rotate", "true");
   } else {
      console.log("true");
      target?.setAttribute("data-rotate", "false");
   }
   window.scroll(0, 0);
   //   setTimeout(() => {
   //      target?.removeAttribute("rotate");
   //   }, 600);
};

export const mainElementAnimation = () => {
   const target = document.getElementsByTagName("main")[0];
   target.classList.add("fade");
   window.scroll(0, 0);
   setTimeout(() => {
      target.classList.remove("fade");
   }, 600);
};

export const rotateMenuBar = () => {
   // const target = document.getElementsByClassName("rotateNavigation");
   // target.forEach((target) => {
   //    target.classList.toggle("rotate");
   // });
   // window.scroll(0, 0);
   // setTimeout(() => {
   //    target.forEach((target) => {
   //       target.classList.toggle("rotate");
   //    });
   // }, 600);
};
