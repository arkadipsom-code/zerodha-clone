import React from "react";

const mockStocks = [
  { name: "INFY", price: 1420.5, percent: "+1.2%", isUp: true },
  { name: "TCS", price: 3980.2, percent: "-0.4%", isUp: false },
  { name: "RELIANCE", price: 2450.0, percent: "+2.1%", isUp: true },
  { name: "WIPRO", price: 465.15, percent: "-1.8%", isUp: false },
  { name: "HDFC", price: 1510.8, percent: "+0.5%", isUp: true },
];

function Watchlist({ onBuyClick }) {
  // 1. Add prop destructuring here
  return (
    <div className="card shadow-sm border-0 bg-white p-3 h-100">
      <h5 className="font-weight-bold mb-3">Market Watchlist</h5>
      <div className="list-group list-group-flush">
        {mockStocks.map((stock, index) => (
          <div
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center px-0 py-3 border-bottom"
          >
            <div>
              <span className="fw-bold d-block">{stock.name}</span>
              <span
                className={`small ${stock.isUp ? "text-success" : "text-danger"}`}
              >
                {stock.percent}
              </span>
            </div>
            <div className="text-end">
              <span className="fw-bold d-block">₹{stock.price.toFixed(2)}</span>
              <div className="mt-1">
                {/* 2. Bind the click event handler directly to pass the specific stock object up */}
                <button
                  className="btn btn-sm btn-outline-success py-0 px-2 me-1 font-monospace"
                  style={{ fontSize: "11px" }}
                  onClick={() => onBuyClick(stock)}
                >
                  B
                </button>
                <button
                  className="btn btn-sm btn-outline-danger py-0 px-2 font-monospace"
                  style={{ fontSize: "11px" }}
                >
                  S
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watchlist;
