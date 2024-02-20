import MadeBy from "../../UI/MadeBy/MadeBy.tsx";
import Footer from "../Footer/Footer.tsx";
import Header from "../Header/Header.tsx";

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
