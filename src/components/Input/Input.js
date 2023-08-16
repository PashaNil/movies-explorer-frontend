import "./Input.css";

function Input({ labelText, type, id, name, err, value }) {
  return (
    <label className="input" for={id}>
      {labelText}
      <input className="input__input" type={type} id={id} name={name} value={value} required />
      <span className="input__error">{err}</span>
    </label>
  )
}

export default Input;
