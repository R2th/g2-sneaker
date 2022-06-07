import React, { useState, useEffect } from "react";

const ShopItem = ({ data, setData, isSthRemove }) => {
  const [isAdd, setIsAdd] = useState(
    localStorage.getItem("cartItems") &&
      JSON.parse(localStorage.getItem("cartItems")).findIndex((item) => {
        return item.id === data.id;
      }) !== -1
  );

  const addItemToCart = () => {
    setData((prevState) => [...prevState, { ...data, count: 1 }]);
    setIsAdd(true);
  };

  useEffect(() => {
    if (isSthRemove === data.id) {
      setIsAdd(false);
    }
  }, [isSthRemove]);

  return (
    <div className="shop-item" key={data.id}>
      <div
        className="shop-item-image"
        style={{
          backgroundColor: "rgb(225, 231, 237)",
        }}
      >
        <img src={data.image} alt={data.id} />
      </div>
      <div className="shop-item-name">{data.name}</div>
      <div className="shop-item-description">{data.description}</div>
      <div className="shop-item-bottom">
        <div className="shop-item-price">${data.price}</div>
        {!isAdd ? (
          <div className="shop-item-button" onClick={addItemToCart}>
            <p>ADD TO CART</p>
          </div>
        ) : (
          <div className="shop-item-button inactive">
            <div className="shop-item-button-cover">
              <div className="shop-item-button-cover-check-icon"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopItem;
