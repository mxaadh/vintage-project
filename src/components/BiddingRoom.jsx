// components/BiddingRoom.js
import { useState } from 'react';

export default function BiddingRoom() {
  const [name, setName] = useState('');
  const [bidAmount, setBidAmount] = useState('');
  const [bids, setBids] = useState([
    { name: 'Ali', amount: '$500' },
    { name: 'Zara', amount: '$550' },
    { name: 'Usman', amount: '$600' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && bidAmount) {
      setBids([...bids, { name, amount: `$${bidAmount}` }]);
      setName('');
      setBidAmount('');
    }
  };

  return (
    <div className="container">
      <h1>Bidding Room</h1>

      {bids.map((bid, index) => (
        <div key={index} className="bid-item">
          <span className="bidder-name">{bid.name}</span>
          <span className="bid-amount">{bid.amount}</span>
        </div>
      ))}

      <div className="place-bid">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Your Bid"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
        />
        <button onClick={handleSubmit}>Place Bid</button>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 50px auto;
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          text-align: center;
          color: #333;
        }
        .bid-item {
          display: flex;
          justify-content: space-between;
          padding: 15px;
          border-bottom: 1px solid #ddd;
        }
        .bid-item:last-child {
          border-bottom: none;
        }
        .bidder-name {
          font-weight: bold;
        }
        .bid-amount {
          color: #2c7a7b;
        }
        .place-bid {
          margin-top: 30px;
        }
        .place-bid input,
        .place-bid button {
          padding: 10px;
          margin-right: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .place-bid button {
          background-color: #2c7a7b;
          color: white;
          cursor: pointer;
        }
        .place-bid button:hover {
          background-color: #225e5e;
        }
      `}</style>
    </div>
  );
}