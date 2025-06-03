import React, { useState } from "react";
import BannerThree from "@/components/BannersThree";

const Cart = () => {
  const [bids, setBids] = useState([
    { name: "Ali", amount: 500 },
    { name: "Zara", amount: 550 },
    { name: "Usman", amount: 600 },
  ]);
  const [newBid, setNewBid] = useState({ name: "", amount: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBid((prev) => ({
      ...prev,
      [name]: name === "amount" ? parseFloat(value) || "" : value,
    }));
  };

  const handlePlaceBid = () => {
    if (newBid.name && newBid.amount) {
      setBids((prev) => [...prev, newBid]);
      setNewBid({ name: "", amount: "" });
    }
  };

  return (
    <div>
      <BannerThree name={"Cart"} />
      <div className="container">
        <h1>Bidding Room</h1>

        {bids.map((bid, index) => (
          <div key={index} className="bid-item">
            <span className="bidder-name">{bid.name}</span>
            <span className="bid-amount">${bid.amount}</span>
          </div>
        ))}

        <div className="place-bid">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newBid.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Your Bid"
            value={newBid.amount}
            onChange={handleInputChange}
          />
          <button onClick={handlePlaceBid}>Place Bid</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
