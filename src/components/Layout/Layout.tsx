import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import MadeBy from "../../UI/MadeBy/MadeBy.tsx";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <>
         <Header />
         <main>{children}</main>
         <Footer />
         <MadeBy />
      </>
   );
};

export default Layout;
