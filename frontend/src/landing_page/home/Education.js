import React from "react";

function Education() {
  return (
    <div className="container mt-3 p-5">
      <div className="row" style={{ color: "#424242" }}>
        <div className="col-12 col-md-6 pl-5">
          <img
            src="/media/images/education.svg"
            alt="Education"
            style={{ width: "75%" }}
          />
        </div>
        <div className="col-12 col-md-6 pr-5">
          <h1 style={{ fontSize: "24px" }}>Free and open market education</h1>
          <p className="mt-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Varsity <i className="fas fa-arrow-right"></i>
          </a>
          <p className="mt-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
