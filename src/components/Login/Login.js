import "./Login.css";
import Form from "../Form/Form.js";
import Input from "../Input/Input.js";

function Login() {
  return (
  <div className="login">
  <Form
    title={"Рады видеть!"}
    btnText={"Войти"}
    errorMsg={"При авторизации произошла ошибка."}
    questionText={"Ещё не зарегистрированы?"}
    linkText={"Регистрация"}
    linkTo={"/signup"}
  >
    <Input labelText={"E-mail"} type={"email"} id={"email"} name={"email"} err={""} value={"pochta@yandex.ru|"}/>
    <Input labelText={"Пароль"} type={"password"} id={"password"} name={"password"} err={""} />
  </ Form>
</div>
  )
}

export default Login;
