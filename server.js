const express = require("express"); //load express module
const app = express();
app.get("./data/item_data.js", (req, res) => {
  res.send("Hello, World!");
});
app.listen(3000, () => {
  console.log("server running at 3000");
});
