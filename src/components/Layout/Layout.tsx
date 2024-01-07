import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  console.log(
    "div в самом вверху включайте кнопкой grid в elements на devtool и пользуемся для позиционирования маленький елеметнов в конце удаляем после адаптивки",
  );
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1240px 1fr",
          maxWidth: "1440px",
          margin: "auto",
        }}
      ></div>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
