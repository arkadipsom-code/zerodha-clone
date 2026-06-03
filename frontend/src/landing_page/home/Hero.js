import React from "react";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        {/* img */}
        <img src="/media/images/homeHero.png" alt="hero" className="mb-5" />

        <h2 className="mt-3" style={{ color: "#424242" }}>
          Invest in everything
        </h2>
        <p className="mt-2 mb-4" style={{ fontSize: "18px", color: "#424242" }}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
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

export default Hero;
