
export const mainElementAnimation = () => {
   const target = document.getElementsByTagName("main")[0];
   target.classList.add("fade");
   window.scroll(0, 0);
   setTimeout(() => {
      target.classList.remove("fade");
   }, 600);
};
