import React from "react";
import "./MoviesCard.css";
import crossImg from "../../images/crossMenu.svg";
import { useLocation } from "react-router";

function MoviesCard({ name, time, img }) {

  const location = useLocation().pathname === "/movies";
  return (
    <article className="moviesCard">
      <img className="moviesCard__img" src={img} alt="Обложка фильма" />
      <div className="moviesCard__rectangle">
        <div className="moviesCard__container-text">
          <h2 className="moviesCard__title">{name}</h2>
          <p className="moviesCard__time">{time}</p>
        </div>
        {location ?
          <button className="moviesCard__choice" type="button" />
          :
          <button className="moviesCard__remove" type="button">
            <img className="moviesCard__cross-img" src={crossImg} alt="Крестик удаления карточки" />
          </button>
        }

      </div>
    </article>
  )
}

export default MoviesCard;
