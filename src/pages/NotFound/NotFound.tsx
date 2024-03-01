import { Link, useLocation } from "react-router-dom";
import styles from "./_notFound.module.scss";

function NotFound() {
   const { pathname } = useLocation();
   return (
      <main className={styles.container}>
         <h1>404</h1>
         <h2>Страница не найдена</h2>
         <Link to={pathname.includes("studio") ? "/studio" : "/"}>На главную</Link>
      </main>
   );
}

export default NotFound;
