import "./AboutMe.css";
import MainTitleLine from "../MainTitleLine/MainTitleLine.js";
import Portfolio from "../Portfolio/Portfolio";
import imgStudent from "../../images/imgStudent.jpg"

function AboutMe() {
  return (
    <section className="aboutMe">
      <MainTitleLine text={"Студент"} />
      <img className="aboutMe__student-img" src={imgStudent} alt="Фотография студента" />
      <h2 className="aboutMe__student-name">Павел</h2>
      <p className="aboutMe__student-job">Фронтенд-разработчик, 28 лет</p>
      <p className="aboutMe__student-description">Родился в Пскове, закончил техникум по направлению "Информационные технологии" и инстиут по "Управление персоналом". В данный момент работаю фотографом и музыкантом в cover группе, выступаем на мероприятиях и свадьбах. Увлекаюсь путешествиями, бегом и плаваньем. В 2023 году прошел курс по вер-разработке в яндекс практикуме, теперь моя мечта стать разработчиком, в данный момент нахожу в активной фазе обучения. </p>
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
