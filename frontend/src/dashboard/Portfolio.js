import React, { useState, useEffect } from "react";

function Portfolio() {
  // 1. Establish live state variables for your MongoDB data rows
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Fetch data from your backend server endpoint upon layout load
  useEffect(() => {
    fetch("https://zerodha-clone-backend-ckkq.onrender.com/allHoldings") // Replace port/route with your actual backend configuration
      .then((res) => {
        if (!res.ok)
          throw new Error("Failed to grab your holdings from database");
        return res.json();
      })
      .then((data) => {
        setHoldings(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Compute live portfolio metrics dynamically from database fields
  const totalInvestment = holdings.reduce(
    (acc, item) => acc + item.qty * item.avg,
    0,
  );
  const currentValue = holdings.reduce(
    (acc, item) => acc + item.qty * item.price,
    0,
  );
  const totalProfitLoss = currentValue - totalInvestment;
  const isProfit = totalProfitLoss >= 0;

  if (loading)
    return (
      <div className="text-center p-5 text-muted">
        Loading your secure portfolio files...
      </div>
    );
  if (error)
    return (
      <div className="alert alert-danger">
        Error loading dashboard data: {error}
      </div>
    );

  return (
    <div className="h-100">
      {/* Statistics Summary Row */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-4">
          <div className="card p-3 border-0 shadow-sm bg-white">
            <span className="text-muted small d-block mb-1 text-uppercase fw-semibold">
              Total Investment
            </span>
            <h4 className="fw-bold mb-0">
              ₹
              {totalInvestment.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </h4>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="card p-3 border-0 shadow-sm bg-white">
            <span className="text-muted small d-block mb-1 text-uppercase fw-semibold">
              Current Value
            </span>
            <h4 className="fw-bold mb-0">
              ₹
              {currentValue.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </h4>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="card p-3 border-0 shadow-sm bg-white">
            <span className="text-muted small d-block mb-1 text-uppercase fw-semibold">
              Overall P&L
            </span>
            <h4
              className={`fw-bold mb-0 ${isProfit ? "text-success" : "text-danger"}`}
            >
              {isProfit ? "+" : ""}₹
              {totalProfitLoss.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </h4>
          </div>
        </div>
      </div>

      {/* Database Breakdown Table */}
      <div className="card shadow-sm border-0 bg-white p-3">
        <h5 className="font-weight-bold mb-3">
          Your Live Holdings ({holdings.length})
        </h5>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Instrument</th>
                <th className="text-end">Qty.</th>
                <th className="text-end">Avg. Cost</th>
                <th className="text-end">LTP (Current)</th>
                <th className="text-end">Cur. Value</th>
                <th className="text-end">P&L</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((stock, index) => {
                const investment = stock.qty * stock.avg;
                const currentVal = stock.qty * stock.price;
                const pnl = currentVal - investment;
                const stockProfit = pnl >= 0;

                return (
                  <tr key={index}>
                    <td className="fw-bold">{stock.name}</td>
                    <td className="text-end font-monospace">{stock.qty}</td>
                    <td className="text-end font-monospace">
                      ₹{stock.avg.toFixed(2)}
                    </td>
                    <td className="text-end font-monospace">
                      ₹{stock.price.toFixed(2)}
                    </td>
                    <td className="text-end font-monospace">
                      ₹{currentVal.toFixed(2)}
                    </td>
                    <td
                      className={`text-end font-monospace fw-bold ${stockProfit ? "text-success" : "text-danger"}`}
                    >
                      {stockProfit ? "+" : ""} {pnl.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
