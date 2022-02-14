import React, { useEffect, useState } from "react";
import item_card from "./data/item_data";
import "./styleItems.css";
import axios from "axios";

const Items = ({
  isLoading,
  changeLoading,
  search,
  filter,
  currencyFilter,
  colorFilter,
}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if (data) {
      // let finalData = data;

      // finalData = finalData

      // .filter((item) => {
      //   if (search) {
      //     return item.item_name.toLowerCase().includes(search.toLowerCase());
      //   }
      //   return true;
      // });

      //     .filter((item) => {
      //       if (filter) {
      //         let array = filter.split("-");
      //         return (
      //           item.item_price >= Number(array[0]) &&
      //           item.item_price <= Number(array[1])
      //         );
      //       }
      //       return true;
      //     })
      //     .filter((item) => {
      //       if (currencyFilter) {
      //         return currencyFilter.includes(item.currency);
      //       }
      //       return true;
      //     })
      //     .filter((item) => {
      //       if (colorFilter) {
      //         return colorFilter.includes(item.color);
      //       }
      //       return true;
      //     });

      // setData(finalData);
    // }

    // changeLoading(true);

    setTimeout(
      () =>
        axios
          .get(
            `http://localhost:8000/item_data?color=${colorFilter}&currency=${currencyFilter}&item_price=${filter}&item_name=${search}`
          )
          .then(
            (response) => {
              changeLoading(null);
              setData(response.data);
            },
            (error) => {
              changeLoading(null);
              setError(error);
            }
          ),
      1000
    );
  }, [filter, search, currencyFilter, colorFilter]);

  //axios
  useEffect(() => {
    setTimeout(
      () =>
        axios.get("http://localhost:8000/item_data").then(
          (response) => {
            console.log(response);
            changeLoading(null);
            setData(response.data);
          },
          (error) => {
            console.log(error);
            changeLoading(null);
            setError(error);
          }
        ),
      2000
    );
  }, []);
  console.log(data);

  return !isLoading ? (
    <div>
      {!error ? (
        data.map((item) => (
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
              <a href={item.button} class="button">
                View more
              </a>
            </div>
          </div>
        ))
      ) : (
        <div style={{ minHeight: "300px" }}>
          <h1 style={{ textAlign: "center" }}>ERROR</h1>
        </div>
      )}
    </div>
  ) : (
    <div style={{ minHeight: "100px" }}></div>
  );
};

export default Items;
