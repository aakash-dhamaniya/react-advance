import React from "react";
import mealsImage from "../../assets/meals.jpg";
import clasess from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  return (
    <>
      <header className={clasess.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={clasess["main-image"]}>
        <img src={mealsImage} alt="meal image" />
      </div>
    </>
  );
}

export default Header;
