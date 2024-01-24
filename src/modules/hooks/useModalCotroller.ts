import { useCallback, useEffect, useRef } from "react";

export const useModalCotroller = () => {
   const dialogRef = useRef<HTMLDialogElement>(null);

   const handleClose: EventListener = useCallback(
      (event) => {
         const modal = event.currentTarget as HTMLDialogElement;
         const target = event.target as HTMLDialogElement;
         if (modal === target) {
            modal.setAttribute("closing", "");
            modal.addEventListener(
               "animationend",
               () => {
                  modal.removeAttribute("closing");
                  modal.close();
               },
               { once: true },
            );
         }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
   );

   const openModal = useCallback((id: string) => {
      const modal = document.getElementById(id) as HTMLDialogElement;
      if (id === "collageModal") {
         modal.show();
      } else {
         // fixME from showModal() to show() bug apperance on students card
         modal.showModal();
      }
   }, []);

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

   return { dialogRef, openModal };
};
