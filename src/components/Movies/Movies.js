import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer.js";

function Movies({ loggedIn }) {


  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList>
      <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
          <MoviesCard name={"Название фильма"} time={"1ч42м"} img={"https://w.forfun.com/fetch/46/466577864a8ce15ca92a193348932e29.jpeg"} />
      </MoviesCardList>
      <Footer />
    </>
  )
}

export default Movies;
