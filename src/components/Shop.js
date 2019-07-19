import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  //fetch data from api
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get",
      {
        headers: {
          Authorization: "27192a7156155e5ea4111ae56c774938"
        }
      }
    );
    const items = await data.json();
    console.log(items);
    setItems(items.data);
  };
  return (
    <div className="App">
      <h1>shop</h1>
      {items.map(item => (
        <h1 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
