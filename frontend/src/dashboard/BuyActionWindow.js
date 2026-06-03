import React, { useState, useEffect } from "react";

function BuyActionWindow({ stock, onClose }) {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(stock ? stock.price : 0);

  // Automatically update input price if selected stock changes
  useEffect(() => {
    if (stock) {
      setPrice(stock.price);
      setQty(1);
    }
  }, [stock]);

  if (!stock) return null;

  const totalValue = qty * price;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Construct request body item corresponding exactly with your backend model structural parameters
    const orderPayload = {
      name: stock.name,
      qty: qty,
      price: price,
      mode: "BUY", // or default parameters matching your schema setup
    };

    try {
      const response = await fetch("http://localhost:3002/newOrder", {
        // Replace route/port with your backend order route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayload),
      });

      if (response.ok) {
        alert(
          `Trade Execution Finalized! Logged ${qty} units of ${stock.name} into database.`,
        );
        onClose();
        window.location.reload(); // Refresh viewport to pull updated numbers into table sheets automatically
      } else {
        alert("Server rejected the transaction order request mapping.");
      }
    } catch (err) {
      console.error("Order processing network error:", err);
      alert(
        "Network error connecting layout stream to database server pipeline.",
      );
    }
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.4)", zIndex: 1050 }}
    >
      <div
        className="card shadow border-0 bg-white p-4"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}
      >
        {/* Header section with colors matching stock action */}
        <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
          <h5 className="fw-bold mb-0 text-success">Buy {stock.name}</h5>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
          ></button>
        </div>

        <form onSubmit={handleFormSubmit}>
          {/* Current Live Price Info */}
          <div className="bg-light p-2 rounded mb-3 text-center">
            <span className="text-muted small">Market Price: </span>
            <span className="fw-bold">₹{stock.price.toFixed(2)}</span>
          </div>

          {/* Quantity Field */}
          <div className="mb-3">
            <label className="form-label text-muted small fw-semibold">
              Quantity
            </label>
            <input
              type="number"
              className="form-control font-monospace"
              min="1"
              value={qty}
              onChange={(e) =>
                setQty(Math.max(1, parseInt(e.target.value) || 1))
              }
              required
            />
          </div>

          {/* Price Field */}
          <div className="mb-4">
            <label className="form-label text-muted small fw-semibold">
              Order Price (₹)
            </label>
            <input
              type="number"
              step="0.05"
              className="form-control font-monospace"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
              required
            />
          </div>

          {/* Live Order Valuation Summary Banner */}
          <div className="d-flex justify-content-between align-items-center mb-4 p-2 bg-light rounded border-start border-success border-3">
            <span className="small text-muted fw-semibold">
              Margin Required:
            </span>
            <span className="fw-bold text-dark font-monospace">
              ₹{totalValue.toFixed(2)}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="row g-2">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-outline-secondary w-100"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
            <div className="col-6">
              <button type="submit" className="btn btn-success w-100">
                Execute Buy
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BuyActionWindow;
