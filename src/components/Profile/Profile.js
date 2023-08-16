import "./Profile.css";
import Header from "../Header/Header.js";

function Profile({ loggedIn, userName, userEmail, errorMsg }) {
  return (
    <div className="profile">
      <Header loggedIn={loggedIn} />
      <h1 className="profile__title">Привет,&nbsp;{userName}!</h1>
      <form className="profile__form">
        <label className="profile__label">
          Имя
          <input className="profile__input" value={userName} />
        </label>

        <label className="profile__label">
          E-mail
          <input className="profile__input" value={userEmail} />
        </label>
        <p className="profile__error-form">{errorMsg}</p>
        <button className="profile__btn" type="submit">Редактировать</button>
        <button className="profile__btn-exit" type="button">Выйти из аккаунта</button>
      </form>
    </div>
  )
}

export default Profile;
