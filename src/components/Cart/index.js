import React, { useState, useEffect } from "react";
import CartItems from "../CartItems";

const Cart = ({ data, setData, setIsSthRemove }) => {
  return (
    <div className="cart-items">
      {data &&
        data.map((item) => (
          <CartItems
            data={item}
            setData={setData}
            setIsSthRemove={setIsSthRemove}
          />
        ))}
    </div>
  );
};

export default Cart;
