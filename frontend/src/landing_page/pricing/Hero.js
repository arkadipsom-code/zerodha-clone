import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center" style={{ marginBottom: "40px" }}>
        <h3 style={{ marginTop: "80px", color: "#424242" }}>Charges</h3>
        <p className="mt-2 mb-4 text-muted" style={{ fontSize: "20px" }}>
          List of all charges and taxes
        </p>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-4 p-5 text-center">
          <img
            src="./media/images/pricingEquity.svg"
            alt="Brokerage Charges"
            className="img-fluid mb-3"
            style={{ width: "80%" }}
          />
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "regular",
              marginBottom: "30px",
              color: "#424242",
            }}
          >
            Free equity delivery
          </h3>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "regular",
              lineHeight: "1.85",
              color: "#424242",
            }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-5 text-center">
          <img
            src="./media/images/intradayTrades.svg"
            alt="Intraday Trades"
            className="img-fluid mb-3"
            style={{ width: "80%" }}
          />
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "regular",
              marginBottom: "30px",
              color: "#424242",
            }}
          >
            Intraday and F&O trades
          </h3>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "regular",
              lineHeight: "1.85",
              color: "#424242",
            }}
          >
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4 p-5 text-center">
          <img
            src="./media/images/pricingEquity.svg"
            alt="Brokerage Charges"
            className="img-fluid mb-3"
            style={{ width: "80%" }}
          />
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "regular",
              marginBottom: "30px",
              color: "#424242",
            }}
          >
            Free direct MF
          </h3>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "regular",
              lineHeight: "1.85",
              color: "#424242",
            }}
          >
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
