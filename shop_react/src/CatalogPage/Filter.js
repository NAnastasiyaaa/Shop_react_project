import React from "react";
import "./Filter.css";
import { useEffect, useState } from "react";

function Filter({
  change,
  filter,
  currencyFilter,
  changeCurrencyFilter,
  changeColorFilter,
}) {

  const [addtype, setAddType] = useState('0-99999');

  function handleAddTypeChange(e) {
    setAddType(e.target.value);
    change(e.target.value);
  }

  return (
    <div>
      <div className="blockButtonAndFilter">
        <div className="filterBox">
          <select value={addtype} onChange={handleAddTypeChange}>
            <option value={"0-99999"}>All prices</option>
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
