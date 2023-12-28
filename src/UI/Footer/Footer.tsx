import { useEffect, useState } from "react";
import FooterTemplate from "./FooterTemplate";
import { content } from "./footerData";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const [bandPage, setBandPage] = useState<boolean>(true);
  const { pathname } = useLocation();
  useEffect(() => {
    // console.log(pathname);
    if (pathname === "/") {
      setBandPage(true);
    } else if (pathname === "/studio") {
      setBandPage(false);
    }
  }, [pathname]);
  return <FooterTemplate content={content} bandPage={bandPage} />;
};

export default Footer;
