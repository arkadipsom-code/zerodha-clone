import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate for routing
import Watchlist from "./Watchlist";
import Portfolio from "./Portfolio";
import BuyActionWindow from "./BuyActionWindow";

function DashboardPage() {
  const [selectedStock, setSelectedStock] = useState(null);
  const navigate = useNavigate(); // 2. Initialize the navigation hook

  // 3. Handle clearing session and logging out
  const handleLogout = () => {
    // If you add JWT tokens or session cookies later, clear them here.
    alert("You have been logged out securely.");
    navigate("/login"); // Instantly redirect back to the login gateway page
  };

  return (
    <div
      className="container-fluid py-4"
      style={{ minHeight: "90vh", backgroundColor: "#f8f9fa" }}
    >
      {/* Dashboard Summary Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card p-3 border-0 shadow-sm bg-white">
            <div className="d-flex justify-content-between align-items-center flex-wrap g-2">
              <div>
                <h4 className="mb-1 fw-bold">Welcome Back, Trader!</h4>
                <p className="text-muted small mb-0">
                  Here is your simplified system workspace dashboard.
                </p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span className="badge bg-success p-2">Market: Connected</span>
                {/* 4. Sleek Logout Trigger Button */}
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-outline-danger fw-semibold px-3"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Workspace Grid Layout */}
      <div className="row g-3">
        {/* Left Side Panel */}
        <div className="col-12 col-md-4 col-lg-3">
          <Watchlist onBuyClick={(stock) => setSelectedStock(stock)} />
        </div>

        {/* Right Side Panel */}
        <div className="col-12 col-md-8 col-lg-9">
          <Portfolio />
        </div>
      </div>

      {/* Dynamic Overlay Buy Modal */}
      {selectedStock && (
        <BuyActionWindow
          stock={selectedStock}
          onClose={() => setSelectedStock(null)}
        />
      )}
    </div>
  );
}

export default DashboardPage;
