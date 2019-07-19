import React, { useState, useEffect } from "react";
import { async } from "q";

function ItemDetails({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchedItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`,
      {
        headers: {
          Authorization: "27192a7156155e5ea4111ae56c774938"
        }
      }
    );
    const item = await fetchedItem.json();
    console.log(item);
    setItem(item.data.item);
  };

  return (
    <div className="App">
      <h1>{item.name}</h1>
    </div>
  );
}

export default ItemDetails;
