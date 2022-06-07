import React from "react";

const CartItems = ({ data, setData, setIsSthRemove }) => {
  const onClickIncreaseAmount = () => {
    setData((prevState) => [
      ...prevState.map((item) => {
        if (item.id === data.id) {
          return { ...item, count: item.count + 1 };
        } else return item;
      }),
    ]);
  };

  const onClickDesceaseAmount = () => {
    if (data.count === 1) {
      setData((prevState) => {
        return prevState.filter((item) => item.id !== data.id);
      });
      setIsSthRemove(data.id);
      return;
    }
    setData((prevState) => [
      ...prevState.map((item) => {
        if (item.id === data.id) {
          return { ...item, count: item.count - 1 };
        } else return item;
      }),
    ]);
  };

  const onClickTrash = () => {
    setData((prevState) => {
      return prevState.filter((item) => item.id !== data.id);
    });
    setIsSthRemove(data.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <div
          className="cart-item-image"
          style={{ backgroundColor: "rgb(77, 49, 127)" }}
        >
          <div className="cart-item-image-block">
            <img src={data.image} alt="image_data" />
          </div>
        </div>
      </div>
      <div className="cart-item-right">
        <div className="cart-item-name">{data.name}</div>
        <div className="cart-item-price">${data.price}</div>
        <div className="cart-item-actions">
          <div className="cart-item-count">
            <div
              className="cart-item-count-button"
              onClick={onClickDesceaseAmount}
            >
              -
            </div>
            <div className="cart-item-count-number">{data.count}</div>
            <div
              className="cart-item-count-button"
              onClick={onClickIncreaseAmount}
            >
              +
            </div>
          </div>
          <div className="cart-item-remove" onClick={onClickTrash}>
            <img
              src={`${process.env.PUBLIC_URL}/trash.png`}
              className="cart-item-remove-icon"
              alt="trash"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
