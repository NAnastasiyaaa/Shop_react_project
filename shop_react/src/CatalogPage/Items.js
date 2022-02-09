import React, { useEffect, useState } from "react";
import item_card from "./data/item_data";
import "./styleItems.css";

const Items = ({ search, filter }) => {
  const [data, setData] = useState(item_card);

  useEffect(() => {
    let finalData = item_card;

    if (filter && !search) {
      let array = filter.split("-");
      finalData = finalData.filter(
        (item) =>
          item.item_price >= Number(array[0]) &&
          item.item_price <= Number(array[1])
      );
      console.log(array);
    }

    if (search && !filter) {
      finalData = finalData.filter((item) => {
        item.item_name.toLowerCase().includes(search.toLowerCase());
      });
    }

    if (search && filter) {
      let array = filter.split("-");
      finalData = finalData.filter((item) => {
        return (
          item.item_name.toLowerCase().includes(search.toLowerCase()) &&
          item.item_price >= Number(array[0]) &&
          item.item_price <= Number(array[1])
        );
      });
    }

    setData(finalData);
  }, [filter, search]);

  const listItems = data.map((item) => (
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
