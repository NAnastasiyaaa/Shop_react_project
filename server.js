const express = require("express");
const item_card = require("./shop_react/src/CatalogPage/data/item_data.js");
const cors = require("cors");

const server = express();
server.use(cors());

server.get("/item_data/", (req, res) => {
  const filters = req.query;
  let data = item_card;
  if (filters["color"]) {
    data = data.filter((item) => {
      return filters["color"].includes(item.color);
    });
  }
  if (filters["currency"]) {
    data = data.filter((item) => {
      return filters["currency"].includes(item.currency);
    });
  }

  if (filters["item_price"]) {
    let array = filters["item_price"].split("-");
    data = data.filter((item) => {
      return (
        item.item_price >= Number(array[0]) &&
        item.item_price <= Number(array[1])
      );
    });
  }

  if (filters["item_name"]) {
    data = data.filter((item) => {
      return item.item_name.toLowerCase().includes(filters["item_name"].toLowerCase());
    });
  }
        
  res.json(data);
});

server.listen(8000, () => {
  console.log("server running!");
});
