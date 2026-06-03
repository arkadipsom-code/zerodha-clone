import React from "react";

function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12 col-md-6 p-5">
          <img
            src="/media/images/largestBroker.svg"
            alt="awards"
            className="image-fluid mb-3"
          />
        </div>
        <div className="col-12 col-md-6 p-5 mt-3">
          <h1 style={{ fontSize: "36px", color: "#424242" }}>
            Largest Stock Broker in India
          </h1>
          <p style={{ color: "#424242" }}>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row mt-5" style={{ color: "#424242" }}>
            <div className="col-12 col-md-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6" style={{ color: "#424242" }}>
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Government Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="/media/images/pressLogos.png"
            alt="press logos"
            style={{ width: "95%", marginTop: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
