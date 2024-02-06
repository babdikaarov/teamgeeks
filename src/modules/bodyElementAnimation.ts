export default () => {
   const target = document.getElementsByTagName("body")[0];
   target.classList.add("fade");
   window.scroll(0, 0);
   setTimeout(() => {
      target.classList.remove("fade");
   }, 400);
};
