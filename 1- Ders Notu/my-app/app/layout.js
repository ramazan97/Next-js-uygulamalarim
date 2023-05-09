import React from "react";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      {/* brada sen nereye gitmek istersen iste sabit bir şekilde gelen fotter ve hearderin olarak  */}

      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </html>
  );
};

export default Layout;
