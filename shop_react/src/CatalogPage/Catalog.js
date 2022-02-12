import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Filter from "./Filter";
import Items from "./Items";
import LoadingIndicator from "./LoadingIndicator";



function Catalog() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [currencyFilter, setCurrencyFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Navbar changeSeacrh={setSearch} search={search} />
      {isLoading && <LoadingIndicator/>}
      {!isLoading && <Filter
        change={setFilter}
        filter={filter}
        currencyFilter={currencyFilter}
        changeCurrencyFilter={setCurrencyFilter}
        changeColorFilter={setColorFilter}
      />}
      <Items isLoading={isLoading} changeLoading={setIsLoading} search={search} filter={filter} currencyFilter={currencyFilter} colorFilter={colorFilter}/>
    </div>
  );
}

export default Catalog;
