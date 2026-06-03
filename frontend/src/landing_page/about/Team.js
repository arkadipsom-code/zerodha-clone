import React from "react";

function Team() {
  return (
    <div className="container pt-3 mb-5">
      <div className="row text-center mb-5">
        <h1 style={{ fontSize: "24px" }}>People</h1>
      </div>
      <div className="row pt-2" style={{ padding: "0 5rem" }}>
        <div
          className="col-12 col-md-6 pt-5 text-center"
          style={{ padding: "0 3.5rem" }}
        >
          <img
            src="./media/images/nithinKamath.jpg"
            alt="Team"
            className="img-fluid"
            style={{
              borderRadius: "100%",
              width: "70%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
          <h4 className="mt-3" style={{ fontSize: "18px", fontWeight: "400" }}>
            Nithin Kamath
          </h4>
          <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
            Founder & CEO
          </p>
        </div>
        <div
          className="col-12 col-md-6 pt-5 text-muted"
          style={{ padding: "0 1.5rem" }}
        >
          <p style={{ fontSize: "15px", lineHeight: "1.9" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader.
          </p>{" "}
          <p>
            {" "}
            Today, Zerodha has changed the landscape of the Indian broking
            industry. He is a member of the SEBI Secondary Market Advisory
            Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            Playing basketball is his zen. Connect on Homepage / TradingQnA /
            Twitter
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Team;
