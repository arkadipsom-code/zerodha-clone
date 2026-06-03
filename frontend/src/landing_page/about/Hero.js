import React from "react";

function Hero() {
  return (
    <div className="container pt-5 mb-5">
      <div className="row text-center pt-5 mb-5">
        <h1 style={{ fontSize: "24px" }}>
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row border-top pt-5" style={{ padding: "0 5rem" }}>
        <div
          className="col-12 col-md-6 pt-5 text-muted"
          style={{ padding: "0 3.5rem" }}
        >
          <p style={{ fontSize: "15px", lineHeight: "1.9" }}>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>{" "}
          <p style={{ fontSize: "15px", lineHeight: "1.9" }}>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>{" "}
          <p style={{ fontSize: "15px", lineHeight: "1.9" }}>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div
          className="col-12 col-md-6 pt-5 text-muted"
          style={{ padding: "0 3.5rem" }}
        >
          <p style={{ fontSize: "15px", lineHeight: "1.9" }}>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>{" "}
          <p style={{ fontSize: "15px", lineHeight: "1.9" }}>
            <a
              href="https://www.rainmatter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>{" "}
          <p style={{ fontSize: "15px", lineHeight: "1.9" }}>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
