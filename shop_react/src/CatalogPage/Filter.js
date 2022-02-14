import React from "react";
import "./Filter.css";

function Filter({ change, filter, currencyFilter, changeCurrencyFilter, changeColorFilter }) {
  const handleChange = (value) => {
    change(value);
  };
  return (
    <div>
      <div className="blockButtonAndFilter">
        <div className="filterBox">
          <select onChange={(e) => handleChange(e.target.value)}>
            <option value={filter}>All prices</option>
            <option value={"200-500"}>200 - 500</option>
            <option value={"500-2000"}>500 - 2000</option>
            <option value={"2000-6000"}>2000 - 6000</option>
          </select>

          <select onChange={(e) => changeCurrencyFilter(e.target.value)}>
           <option value={"UAH USD"}>All currencies</option>
            <option value={"UAH"}>UAH</option>
            <option value={"USD"}>USD</option>
          </select>

          <select onChange={(e) => changeColorFilter(e.target.value)}>
           <option value={"red blue white"}>All colors</option>
            <option value={"red"}>Red</option>
            <option value={"blue"}>Blue</option>
            <option value={"white"}>White</option>
          </select>
        </div>
        <button className="applyButton">Apply</button>
      </div>
      <hr className="borderCatalog"></hr>
    </div>
  );
}

export default Filter;
