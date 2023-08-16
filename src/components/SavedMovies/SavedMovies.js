import "./SavedMovies.css";
import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer.js";

function SavedMovies({ loggedIn }) {
  return (
    <>
    <Header loggedIn={loggedIn} />
    <main className="savedMovies">
      <div className="savedMovies__movies-container">
        <SearchForm />
        <MoviesCardList>
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
        </MoviesCardList>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default SavedMovies;
