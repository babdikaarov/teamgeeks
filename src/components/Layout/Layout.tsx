import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import React, { PropsWithChildren } from "react";
import MadeBy from "../../UI/MadeBy/MadeBy.tsx";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
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
