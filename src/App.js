import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [cost, setCost] = useState(0);
  const [isSthRemove, setIsSthRemove] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(data));
    setCost(
      data.reduce(
        (prev, cur) => parseFloat(prev + cur.count * cur.price).toFixed(2),
        0
      )
    );
  }, [data]);

  return (
    <div className="main-content">
      <Card title="Our Products">
        <Shop
          setData={setData}
          isSthRemove={isSthRemove}
          setIsSthRemove={setIsSthRemove}
        />
      </Card>
      <Card title="Your cart" cost={cost}>
        <Cart data={data} setData={setData} setIsSthRemove={setIsSthRemove} />
      </Card>
    </div>
  );
}

export default App;
