import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Filter from "./Filter";
import Items from "./Items";

function Catalog() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <div>
      <Navbar changeSeacrh={setSearch} search={search} />
      <Filter changeFilter={setFilter} filter={filter}/>
      <Items search={search} filter={filter}/>
    </div>
  );
}

export default Catalog;
