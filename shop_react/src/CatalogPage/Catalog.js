import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Filter from "./Filter";
import Items from "./Items";

function Catalog() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [currencyFilter, setCurrencyFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");

  return (
    <div>
      <Navbar changeSeacrh={setSearch} search={search} />
      <Filter
        change={setFilter}
        filter={filter}
        currencyFilter={currencyFilter}
        changeCurrencyFilter={setCurrencyFilter}
        changeColorFilter={setColorFilter}
      />
      <Items search={search} filter={filter} currencyFilter={currencyFilter} colorFilter={colorFilter}/>
    </div>
  );
}

export default Catalog;
