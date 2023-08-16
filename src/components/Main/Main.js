import Promo from "../Promo/Promo.js";
import Header from "../Header/Header.js"
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import AboutMe from "../AboutMe/AboutMe.js";
import Footer from "../Footer/Footer.js"

function Main({ loggedIn }) {
  return (
    <main>
      <Header loggedIn={loggedIn} />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </main>
  );
}

export default Main;
