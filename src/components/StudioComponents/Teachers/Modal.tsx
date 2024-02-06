import styles from "./_modalTeachers.module.scss";
import { useEffect } from "react";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({ teacher, closeModal }) => {
   useEffect(() => {
      document.body.style.overflow = "hidden";

      return () => {
         document.body.style.overflow = "auto";
      };
   }, []);

   if (!teacher) {
      return null;
   }

   return (
      <div>
         <div
            key={teacher.id}
            className={styles.modale}
         >
            <div
               className={styles.close}
               onClick={closeModal}
            >
               <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M12.5 0C19.4037 0 25 5.59625 25 12.5C25 19.4037 19.4037 25 12.5 25C5.59625 25 0 19.4037 0 12.5C0 5.59625 5.59625 0 12.5 0ZM12.5 2.5C9.84783 2.5 7.3043 3.55357 5.42893 5.42893C3.55357 7.3043 2.5 9.84783 2.5 12.5C2.5 15.1522 3.55357 17.6957 5.42893 19.5711C7.3043 21.4464 9.84783 22.5 12.5 22.5C15.1522 22.5 17.6957 21.4464 19.5711 19.5711C21.4464 17.6957 22.5 15.1522 22.5 12.5C22.5 9.84783 21.4464 7.3043 19.5711 5.42893C17.6957 3.55357 15.1522 2.5 12.5 2.5ZM9.84875 8.08L12.5 10.7325L15.1513 8.08C15.2674 7.96386 15.4053 7.87174 15.557 7.80888C15.7087 7.74603 15.8714 7.71368 16.0356 7.71368C16.1999 7.71368 16.3625 7.74603 16.5142 7.80888C16.666 7.87174 16.8039 7.96386 16.92 8.08C17.0361 8.19614 17.1283 8.33401 17.1911 8.48575C17.254 8.6375 17.2863 8.80013 17.2863 8.96438C17.2863 9.12862 17.254 9.29125 17.1911 9.443C17.1283 9.59474 17.0361 9.73261 16.92 9.84875L14.2675 12.4987L16.92 15.1513C17.1546 15.3858 17.2863 15.7039 17.2863 16.0356C17.2863 16.3673 17.1546 16.6854 16.92 16.92C16.6854 17.1546 16.3673 17.2863 16.0356 17.2863C15.7039 17.2863 15.3858 17.1546 15.1513 16.92L12.5 14.2675L9.84875 16.92C9.6142 17.1546 9.29608 17.2863 8.96438 17.2863C8.63267 17.2863 8.31455 17.1546 8.08 16.92C7.84545 16.6854 7.71368 16.3673 7.71368 16.0356C7.71368 15.7039 7.84545 15.3858 8.08 15.1513L10.7325 12.5L8.08125 9.84875C7.8467 9.61436 7.71486 9.2964 7.71475 8.96482C7.71463 8.63323 7.84624 8.31518 8.08063 8.08063C8.31501 7.84607 8.63297 7.71424 8.96456 7.71412C9.29615 7.714 9.6142 7.84561 9.84875 8.08Z"
                     fill="#909090"
                  />
               </svg>
            </div>
            <div className={styles.scroll}>
               <div>
                  <img
                     className={styles.img}
                     src={teacher.img}
                     alt=""
                  />
               </div>

               <div className={styles.block1}>
                  <h1 className={styles.title}>{teacher.name}</h1>
                  <p className={styles.p}>{teacher.description}</p>
                  <div className={styles.shadow}></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Modal;
