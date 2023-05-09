import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import React from "react";
import "./global.css";
import Providers from "./Providers";

// dışarıdan children diye paramaetre aldı
// providerleri dark modu burada sarmaladık
const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
