const express = require("express"); 
const item_card = require("./shop_react/src/CatalogPage/data/item_data.js");
const cors = require('cors')

const server = express();
server.use(cors())

server.get("/item_data", (req, res) => {
  res.json(item_card);
});

// server.get("/item_data/:id", (req, res) => {
//   const {id} = req.params
//   const product = item_card.find(el=>el.id === +id)
//   res.json(product)
// });

server.listen(8000, () => {
  console.log("server running!");
});
