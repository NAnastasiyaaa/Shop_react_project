import React from "react";
import item_card from "./data/item_data";
import "./styleItems.css";

const Items = () => {
  const listItems = item_card.map((item) => (
    <div class="product-item">
      <div className="img_item">
      <img src={item.photo} alt="rrr"></img>
      </div>
      <div class="product-list">
        <h3>{item.item_name}</h3>
        <h4>{item.item_name}</h4>
        <span class="price">
          {item.item_price} {item.currency}
        </span>

        <div className="button">View more</div>
      </div>
    </div>
  ));
  return <div>{listItems}</div>;
};

export default Items;
