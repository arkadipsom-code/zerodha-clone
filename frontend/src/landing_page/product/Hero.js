import React from "react";

function Hero() {
  return (
    <div
      className="container"
      style={{
        marginBottom: "0",
        paddingBottom: "40px",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <div className="row text-center">
        <h2 style={{ marginTop: "80px" }}>Zerodha Products</h2>
        <p className="mt-2 mb-4 text-muted" style={{ fontSize: "18px" }}>
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="text-muted mb-4" style={{ fontSize: "15px" }}>
          Check out our{" "}
          <a
            href="https://zerodha.com/investments"
            style={{ textDecoration: "none" }}
          >
            investment offerings <i className="fas fa-arrow-right"></i>
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
