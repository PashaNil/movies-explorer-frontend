import "./Register.css";
import Form from "../Form/Form";
import Input from "../Input/Input";

function Register() {
  return (
    <main className="register">
      <Form
        title={"Добро пожаловать!"}
        btnText={"Зарегистрироваться"}
        errorMsg={"Пользователь с таким email уже существует."}
        questionText={"Уже зарегистрированы?"}
        linkText={"Войти"}
        linkTo={"/signin"}
      >
        <Input labelText={"Имя"} type={"text"} id={"name"} name={"name"} err={""} value={"Виталий"} />
        <Input labelText={"E-mail"} type={"email"} id={"email"} name={"email"} err={""} value={"pochta@yandex.ru|"}/>
        <Input labelText={"Пароль"} type={"password"} id={"password"} name={"password"} err={"Что-то пошло не так..."} value={"••••••••••••••"}/>
      </ Form>
    </main>
  )
}

export default Register;
