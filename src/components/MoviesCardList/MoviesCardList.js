import "./MoviesCardList.css";
import { useLocation } from "react-router";

function MoviesCardList({ children }) {
  const location = useLocation().pathname === "/movies";
  return (
    <>
      <section className="moviesCardList">
        {!children && <p className="moviesCardList__not-found">Ничего не найдено!</p>}
        <div className="moviesCardList__grid-container">
          {children}
        </div>
        {location && <button className="moviesCardList__still-btn" type="button">Ещё</button>}
      </section>
    </>
  )
}

export default MoviesCardList;
