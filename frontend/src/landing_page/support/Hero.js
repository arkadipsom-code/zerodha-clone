import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid"
      id="supportHero"
      style={{ backgroundColor: "#387ED1" }}
    >
      <div className="p-5 text-center" id="supportWrapper">
        <h4 style={{ fontSize: "2.5rem", color: "whitesmoke" }}>
          Support Portal
        </h4>
        <a href="" style={{ color: "white" }}>
          Track Tickets
        </a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-8 p-5" style={{ color: "whitesmoke" }}>
          <h1 className="fs-3" style={{ marginBottom: "30px" }}>
            Search for an answer or browse help topics <br /> to create a ticket
          </h1>
          <input
            placeholder="Eg. how do I activate F&O"
            className="form-control mb-3"
            style={{ maxWidth: "500px", borderColor: "transparent" }}
          />
          <br />
          <a href="" style={{ color: "white" }}>
            Track account opening
          </a>{" "}
          |{" "}
          <a href="" style={{ color: "white" }}>
            Track segment activation
          </a>{" "}
          |{" "}
          <a href="" style={{ color: "white" }}>
            Intraday margins
          </a>{" "}
          |{" "}
          <a href="" style={{ color: "white" }}>
            Kite user manual
          </a>
        </div>
        <div className="col-4 p-5" style={{ color: "whitesmoke" }}>
          <h1 className="fs-3">Featured</h1>
          <ul>
            <li>
              <a href="" style={{ color: "white" }}>
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="" style={{ color: "white" }}>
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
