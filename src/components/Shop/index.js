import React from "react";
import ShopItem from "../ShopItem";

const sample_data = require("../../utils/sample_data/shoes.json");

const Shop = ({ setData, isSthRemove }) => {
  return (
    <div className="shop-items">
      {sample_data.shoes.map((item) => (
        <ShopItem
          data={item}
          key={item.id}
          setData={setData}
          isSthRemove={isSthRemove}
        />
      ))}
    </div>
  );
};

export default Shop;
