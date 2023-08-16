import "./AboutMe.css";
import MainTitleLine from "../MainTitleLine/MainTitleLine.js";
import Portfolio from "../Portfolio/Portfolio";
import imgStudent from "../../images/imgStugent2.jpg"

function AboutMe() {
  return (
    <section className="aboutMe">
      <MainTitleLine text={"Студент"} />
      <img className="aboutMe__student-img" src={imgStudent} alt="Фотография студента" />
      <h2 className="aboutMe__student-name">Виталий</h2>
      <p className="aboutMe__student-job">Фронтенд-разработчик, 30 лет</p>
      <p className="aboutMe__student-description">
      Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
      </p>
      <a
        className="aboutMe__student-github-link"
        href="https://github.com/PashaNil"
        target="_blank"
        rel="noreferrer"
      >Github</a>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
