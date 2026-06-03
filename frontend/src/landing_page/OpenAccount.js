import React from "react";

function OpenAccount() {
  return (
    <div className="container">
      <div className="row text-center" style={{ color: "#424242" }}>
        <h2 className="mt-5">Open a Zerodha account</h2>
        <p className="mt-2 mb-4" style={{ fontSize: "18px" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          type="button"
          className="btn btn-primary btn-lg px-2 mt-3 mb-5"
          onClick={() => (window.location.href = "/signup")}
          style={{
            width: "17%",
            margin: "0 auto",
            fontWeight: "semibold",
            fontSize: "20px",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
