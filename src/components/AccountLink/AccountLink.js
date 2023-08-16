import { Link } from "react-router-dom";
import "./AccountLink.css";
import accountIcon from "../../images/accountIcon.svg";

function AccountLink({ visible }) {
  return (
    <Link className="accountLink" to="/profile">
      Аккаунт
      <img className="accountLink__icon" src={accountIcon} alt="Иконка аккантуа" />
    </Link>
  )
}

export default AccountLink;
