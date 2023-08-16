import "./Form.css";
import Logo from "../Logo/Logo.js";
import { Link } from "react-router-dom";

function Form({
  title,
  btnText,
  children,
  errorMsg,
  questionText,
  linkText,
  linkTo
}) {
  return (
    <div className="form">
      <Logo />
      <h1 className="form__title">{title}</h1>
      <form className="form__form">
        <fieldset className="form__fieldset">
          {children}
        </fieldset>
        <p className="form__error">{errorMsg}</p>
        <button className="form__btn">{btnText}</button>
      </form>
      <p className="form__question">
        {questionText}
        <Link className="form__link" to={linkTo}>{linkText}</Link>
      </p>
    </div>
  )
}

export default Form;
