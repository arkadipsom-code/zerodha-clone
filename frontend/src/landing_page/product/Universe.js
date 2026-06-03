import React from "react";

function Universe() {
  return (
    <div
      className="container"
      style={{
        marginBottom: "0",
        paddingBottom: "40px",
      }}
    >
      <div className="row text-center">
        <p style={{ fontSize: "20px", marginBottom: "85px" }}>
          Want to know more about our technology stack? Check out the{" "}
          <a
            href="https://zerodha.tech"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
        <h2 className="mt-2 mb-4" style={{ fontSize: "24px" }}>
          The Zerodha Universe
        </h2>
        <p className="mb-4" style={{ fontSize: "16.8px" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row p-5">
        {/* Zerodha fund house */}
        <div className="col-4 text-center px-5">
          <a
            href="https://www.zerodhafundhouse.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src="./media/images/zerodhaFundhouse.png"
              alt="Zerodha Fund House"
              className="img-fluid"
              style={{ width: "50%" }}
            />

            <p className="mt-3 text-muted" style={{ fontSize: "12px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </a>
        </div>
        {/* sensibull */}
        <div className="col-4 text-center px-5">
          <a
            href="https://sensibull.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src="media/images/sensibullLogo.svg"
              alt="Sensibull"
              className="img-fluid"
              style={{ width: "70%" }}
            />

            <p className="mt-3 text-muted" style={{ fontSize: "12px" }}>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </a>
        </div>
        {/* tijori */}
        <div className="col-4 text-center px-5">
          <a
            href="https://www.tijorifinance.com/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src="media/images/tijori.svg"
              alt="Tijori"
              className="img-fluid"
              style={{ width: "38%" }}
            />

            <p className="mt-3 text-muted" style={{ fontSize: "12px" }}>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </a>
        </div>
      </div>
      <div className="row px-5">
        {/* streak */}
        <div className="col-4 text-center mb-5 px-5">
          <a
            href="https://www.streak.tech/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src="media/images/streakLogo.png"
              alt="Streak"
              className="img-fluid"
              style={{ width: "50%" }}
            />

            <p className="mt-3 text-muted" style={{ fontSize: "12px" }}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </a>
        </div>
        {/* smallcase */}
        <div className="col-4 text-center mb-5 px-5">
          <a
            href="https://smallcase.zerodha.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src="media/images/smallcaseLogo.png"
              alt="Smallcase"
              className="img-fluid"
              style={{ width: "60%" }}
            />

            <p className="mt-3 text-muted" style={{ fontSize: "12px" }}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        {/* ditto */}
        <div className="col-4 text-center mb-5 px-5">
          <a
            href="https://joinditto.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src="media/images/dittoLogo.png"
              alt="Ditto"
              className="img-fluid"
              style={{ width: "38%" }}
            />

            <p className="mt-3 text-muted" style={{ fontSize: "12px" }}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-2 mt-3 mb-5"
          onClick={() => (window.location.href = "/signup")}
          style={{
            width: "17%",
            fontWeight: "400",
            fontSize: "20px",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
