import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filterCheckbox">
      <input type="checkbox" id="cbx" style={{display: "none"}} />
      <label for="cbx" className="toggle"><span></span></label>
    </div>
  )
}

export default FilterCheckbox;
