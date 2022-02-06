import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div>
      <div className="blockButtonAndFilter">
        <div className="filterBox">
          <select>
            <option>Filter 1</option>
          </select>

          <select>
            <option>Filter 2</option>
          </select>

          <select>
            <option>Filter 3</option>
          </select>
        </div>
        <button className="applyButton">Apply</button>
      </div>
      <hr className="borderCatalog"></hr>
    </div>
  );
}

export default Filter;
