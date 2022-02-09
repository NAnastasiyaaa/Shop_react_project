import React, { useEffect, useState } from "react";
import item_card from "./data/item_data";
import "./styleItems.css";

const Items = ({ search, filter, currencyFilter, colorFilter }) => {
  const [data, setData] = useState(item_card);

  useEffect(() => {
    let finalData = item_card;
    
    finalData = finalData
      .filter(item=>{
        if(search){
          return item.item_name.toLowerCase().includes(search.toLowerCase());
        }
        return true;
      })
      .filter(item=>{
        if(filter){
          let array = filter.split("-");
          return  item.item_price >= Number(array[0]) && item.item_price <= Number(array[1])
        }
        return true;
      })
      .filter(item=>{
        if(currencyFilter){
          return currencyFilter.includes(item.currency);
        }
        return true;
      })
      .filter(item=>{
        if(colorFilter){
          return colorFilter.includes(item.color);
        }
        return true;
      })



    setData(finalData);
  }, [filter, search, currencyFilter, colorFilter]);

  const listItems = data.map((item) => (
    <div class="product-item">
      <div className="img_item">
        <img src={item.photo} alt="rrr"></img>
      </div>
      <div class="product-list">
        <h3>{item.item_name}</h3>
        <h4>{item.item_name}</h4>
        <h4>{item.color}</h4>
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
