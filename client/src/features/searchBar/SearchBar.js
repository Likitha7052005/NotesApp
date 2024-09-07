import "./SearchBar.css";
import "../../GlobalCSS/GlobalCSS.css";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "./searchBarSlice";
import { useState } from "react";

function SearchBar() {

  const searchValue = useSelector((state)=>state.searchBar.value);
  const [inputValue, setInputValue] = useState(searchValue);
  const dispatch = useDispatch();

  const clearValue = ()=>{
    dispatch(setValue(""));
  }

  const updateValue = (e) => {
    const lowerCaseValue = e.target.value.toLowerCase();
    setInputValue(lowerCaseValue);
    dispatch(setValue(lowerCaseValue));
  }

  return (
    <div className="search-bar-div d-flex justify-content-center align-items-center">
      <div className="input-group w-50 text-centre">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          value={searchValue}
          onChange={updateValue}
        >
        </input>
        <button
          className="btn btn-outline-secondary text-white"
          type="button"
          id="button-addon2"
          onClick={clearValue}
        >
          clear
        </button>
      </div>
    </div>
  );
}

export default SearchBar;