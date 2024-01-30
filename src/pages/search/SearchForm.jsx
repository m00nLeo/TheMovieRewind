import React, { useState } from "react";
import Card from "../../components/Card";
import classes from "../../styles/UI/search/SearchForm.module.css";
import { FaSearch } from "react-icons/fa";

const SearchForm = ({ setQuery, fecthSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setQuery(inputValue);
    fecthSearch();
  };

  const handleKeyDown = (event) => {
    if (event?.key === "Enter") {
      return handleSubmit();
    }
  };
  return (
    <Card>
      <div className={classes.search}>
        {/* Search */}
        <div className={classes.searchBox}>
          <div className="">
            <FaSearch />
            Search ...
          </div>
          <input
            type="text"
            placeholder="Movie Name"
            className={classes.inputBox}
            onChange={handleChangeInput}
            onKeyDown={() => handleKeyDown()}
          />
        </div>
        {/* Button */}
        <button onClick={() => handleSubmit()}>Search</button>
      </div>
    </Card>
  );
};

export default SearchForm;
