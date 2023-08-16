import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import AccountLink from "../AccountLink/AccountLink";
import menuBurger from "../../images/menuBurger.svg";
import Logo from "../Logo/Logo.js";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <>
      {loggedIn ?
        <header className="header">
          <Logo />
          <nav className="header__nav">
            <Link className="header__link header__link_active" to="/movies">Фильмы</Link>
            <Link className="header__link" to="/saved-movies">Сохранённые фильмы</Link>
          </nav>
          <nav className="header__nav">
            <AccountLink />
          </nav>
          <button className="header__button-menu" type="button" onClick={() => setOpenNav(true)}>
            <img className="header__menu-img" src={menuBurger} alt="меню навигации" />
          </button>
          <Navigation openNav={openNav} setOpenNav={setOpenNav} />
        </header>
        :
        <header className="header header_main">
          <Logo />
          <nav className="header__main-nav">
            <Link className="header__signup" to="/signup">Регистрация</Link>
            <Link className="header__signin" to="/signin">Войти</Link>
          </nav>
        </header>
      }
    </>
  );
}

export default Header;
