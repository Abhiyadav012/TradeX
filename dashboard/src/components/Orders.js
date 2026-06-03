import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setAllOrders(res.data);
      });
  }, []);

  return (
    <div className="orders">
      {allOrders.map((stock, index) => {
        return (
          <div key={index} className="order-card">
            <div className="order-top">
              <h3>{stock.name}</h3>

              <span className={stock.mode === "BUY" ? "buy-tag" : "sell-tag"}>
                {stock.mode}
              </span>
            </div>

            <div className="order-details">
              <p>
                Qty: <span>{stock.qty}</span>
              </p>

              <p>
                Price: <span>₹ {stock.price}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
