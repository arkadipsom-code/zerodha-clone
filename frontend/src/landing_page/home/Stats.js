import React from "react";

function Stats() {
  return (
    <div className="container mt-3 p-5">
      <div className="row">
        <div className="col-12 col-md-6 pl-5" style={{ color: "#424242" }}>
          <h1 className="mb-2" style={{ fontSize: "24px" }}>
            Trust with confidence
          </h1>
          <h2 className="mt-5" style={{ fontSize: "20px" }}>
            Customer-first always
          </h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h2 className="mt-4" style={{ fontSize: "20px" }}>
            No spam or gimmicks
          </h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h2 className="mt-4" style={{ fontSize: "20px" }}>
            The Zerodha universe
          </h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="mt-4" style={{ fontSize: "20px" }}>
            Do better with money
          </h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-md-6 pr-5">
          <img
            src="/media/images/ecosystem.png"
            alt="trust with confidence"
            style={{ width: "100%" }}
          />
          <div className="text-center">
            <a href="#" style={{ textDecoration: "none" }}>
              Explore our products <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#" className="ms-4" style={{ textDecoration: "none" }}>
              Try Kite demo <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
