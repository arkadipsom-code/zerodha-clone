import React from "react";

function Pricing() {
  return (
    <div className="container mt-3 p-5">
      <div className="row" style={{ color: "#424242" }}>
        <div className="col-12 col-md-4 mr-5 pl-5">
          <h1 style={{ fontSize: "24px" }}>Unbeatable pricing</h1>
          <p className="mt-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See pricing <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-12 col-md-8 pl-5 ml-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-2 border border-primary rounded">
              <h1>₹0</h1>
              <p>Free account opening</p>
            </div>
            <div className="col-12 col-md-4 border border-primary rounded">
              <h1>₹0</h1>
              <p>
                Free equity delivery <br />
                and direct mutual funds
              </p>
            </div>
            <div className="col-12 col-md-2 border border-primary rounded">
              <h1>₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
