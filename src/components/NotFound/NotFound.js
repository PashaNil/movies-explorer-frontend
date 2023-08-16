import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {

  const navigate = useNavigate()

  return (
    <div className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__subtitle">Страница не найдена</p>
      <button className="notFound__link" type="button" onClick={()=>navigate(-1)}>Назад</button>
    </div>
  )
}

export default NotFound;
