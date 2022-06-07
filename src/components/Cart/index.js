import React from "react";
import CartItems from "../CartItems";

const Cart = ({ data, setData, setIsSthRemove }) => {
  return (
    <div className="cart-items">
      {data ? (
        data.map((item) => (
          <CartItems
            data={item}
            setData={setData}
            setIsSthRemove={setIsSthRemove}
          />
        ))
      ) : (
        <>Your cart is empty.</>
      )}
    </div>
  );
};

export default Cart;
