import "./SearchForm.css";
import searchFormIcon from "../../images/searchFormIcon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="searchForm">
      <form className="searchForm__form" noValidate>
        <input
          className="searchForm__input"
          type="text"
          name="movie"
          id="movie"
          placeholder="Фильм"
          required
        />
        <button className="searchForm__btn">
          <img className="searchForm__img-btn" src={searchFormIcon} alt="Кнопка поиска" />
        </button>
      </form>
      <div className="searchForm__filter-container">
        <p className="searchForm__filter-caption">Короткометражки</p>
        <FilterCheckbox />
      </div>
    </section>
  )
}

export default SearchForm;
