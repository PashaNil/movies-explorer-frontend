import { Link } from "react-router-dom";
import "./Navigation.css";
import crossMenu from "../../images/crossMenu.svg";
import AccountLink from "../AccountLink/AccountLink";

function Navigation({ openNav, setOpenNav }) {
  return (
    <div className={`navigation ${openNav && "navigation_opened"}`}>
      <div className="navigation__container">
        <nav className="navigation__links">
          <Link className="navigation__link" to="/">Главная</Link>
          <Link className="navigation__link navigation__link_active" to="/movies">Фильмы</Link>
          <Link className="navigation__link" to="/saved-movies">Сохранённые фильмы</Link>
        </nav>
        <nav className="navigation__links">
          <AccountLink />
        </nav>
        <img className="navigation__close" src={crossMenu} alt="Закрыть меню" onClick={() => setOpenNav(false)} />
      </div>
    </div>
  )
}

export default Navigation;
