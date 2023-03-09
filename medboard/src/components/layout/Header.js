import React from "react";
import clasess from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton.js";
const Header = () => {
  return (
    <>
      <header className={clasess.header}>
        <h1>DashBoard</h1>
        <HeaderCartButton />
      </header>
    </>
  );
};

export default Header;
