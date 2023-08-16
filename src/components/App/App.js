import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';

import Main from "../Main/Main.js"
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';

function App() {
  const [preloaderStatus, setPreloaderStatus] = React.useState(false)
  return (
    <div className="page">
      <div className="page__container">
        <Preloader active={preloaderStatus} />
        <Routes>
          <Route path="/" element={<Main loggedIn={false} />} />
          <Route path="/movies" element={<Movies loggedIn={true} />} preloader={setPreloaderStatus}/>
          <Route path="/saved-movies" element={<SavedMovies loggedIn={true} />} preloader={setPreloaderStatus}/>
          <Route path="/signup" element={<Register />} preloader={setPreloaderStatus}/>
          <Route path="/signin" element={<Login />} preloader={setPreloaderStatus}/>
          <Route
            path="/profile"
            element={
              <Profile
                loggedIn={true}
                userName={"Виталий"}
                userEmail={"pochta@yandex.ru"}
                errorMsg={"При обновлении профиля произошла ошибка."}
                preloader={setPreloaderStatus}
              />
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
