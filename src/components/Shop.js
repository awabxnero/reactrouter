import React, { useState, useEffect } from "react";
import { async } from "q";

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
        <h1>{item.item.name}</h1>
      ))}
    </div>
  );
}

export default Shop;
