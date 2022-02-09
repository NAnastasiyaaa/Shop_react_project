import React from "react";
import "./Filter.css";

function Filter({ changeFilter, filter }) {
  const handleChange = (value) => {
    changeFilter(value)
    console.log(filter)
  };

  return (
    <div>
      <div className="blockButtonAndFilter">
        <div className="filterBox">
          <select  onChange={(e) => handleChange(e.target.value)}>
            <option value={"0-99999"}>0-99999</option>
            <option value={"100-200"}>100 - 200</option>
            <option value={"200-500"}>200 - 500</option>
            <option value={"500-1000"}>500 - 1000</option>
          </select>

          <select>
            <option>Filter 2</option>
          </select>

          <select>
            <option>Filter 3</option>
          </select>
        </div>
        <button className="applyButton" >Apply</button>
      </div>
      <hr className="borderCatalog"></hr>
    </div>
  );
}

export default Filter;
