import React, { useState } from "react";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  const getTabStyle = (tabName) => ({
    border: "none",
    borderBottom:
      activeTab === tabName ? "2px solid #387ed1" : "2px solid transparent",
    color: activeTab === tabName ? "#424242" : "#387ed1",
    backgroundColor: "transparent",
    fontSize: "24px",
    paddingBottom: "10px",
    cursor: "pointer",
  });

  return (
    <div className="container mt-5 p-5">
      {/* Tabs */}
      <ul
        className="nav nav-tabs border-0"
        style={{
          borderBottom: "1px solid #dee2e6",
        }}
      >
        {/* Equity */}
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "equity" ? "active" : ""}`}
            type="button"
            style={getTabStyle("equity")}
            onClick={() => setActiveTab("equity")}
          >
            Equity
          </button>
        </li>

        {/* Currency */}
        <li className="nav-item ms-4">
          <button
            className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
            type="button"
            style={getTabStyle("currency")}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
        </li>

        {/* Commodity */}
        <li className="nav-item ms-4">
          <button
            className={`nav-link ${activeTab === "commodity" ? "active" : ""}`}
            type="button"
            style={getTabStyle("commodity")}
            onClick={() => setActiveTab("commodity")}
          >
            Commodity
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content mt-4">
        {/* EQUITY TAB */}
        {activeTab === "equity" && (
          <div className="tab-pane fade show active">
            <div className="table-responsive">
              <table
                className="table align-middle m-0"
                style={{ border: "1px solid #dee2e6" }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#fafafa" }}>
                    <th
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    ></th>
                    <th
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#666",
                        fontWeight: "normal",
                      }}
                    >
                      Equity delivery
                    </th>
                    <th
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#666",
                        fontWeight: "normal",
                      }}
                    >
                      Equity intraday
                    </th>
                    <th
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#666",
                        fontWeight: "normal",
                      }}
                    >
                      F&amp;O - Futures
                    </th>
                    <th
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#666",
                        fontWeight: "normal",
                      }}
                    >
                      F&amp;O - Options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      Brokerage
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      Zero Brokerage
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.03% or Rs. 20/executed order whichever is lower
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.03% or Rs. 20/executed order whichever is lower
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      Flat Rs. 20 per executed order
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      STT/CTT
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.1% on buy &amp; sell
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.025% on the sell side
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.05% on the sell side
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      <ul className="ps-3 mb-0">
                        <li>
                          0.15% of the intrinsic value on options that are
                          bought and exercised
                        </li>
                        <li>0.15% on sell side (on premium)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      Transaction charges
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      NSE: 0.00307%
                      <br />
                      BSE: 0.00375%
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      NSE: 0.00307%
                      <br />
                      BSE: 0.00375%
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      NSE: 0.00183%
                      <br />
                      BSE: 0
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      NSE: 0.03553% (on premium)
                      <br />
                      BSE: 0.0325% (on premium)
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      GST
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      SEBI charges
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      ₹10 / crore
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      ₹10 / crore
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      ₹10 / crore
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      ₹10 / crore
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      Stamp charges
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.015% or ₹1500 / crore on buy side
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.003% or ₹300 / crore on buy side
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.002% or ₹200 / crore on buy side
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.003% or ₹300 / crore on buy side
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CURRENCY TAB */}
        {activeTab === "currency" && (
          <div className="tab-pane fade show active">
            <div className="table-responsive">
              <table
                className="table align-middle m-0"
                style={{ border: "1px solid #dee2e6" }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#fafafa" }}>
                    <th
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    ></th>
                    <th
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#666",
                        fontWeight: "normal",
                      }}
                    >
                      Currency futures
                    </th>
                    <th
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#666",
                        fontWeight: "normal",
                      }}
                    >
                      Currency options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      Brokerage
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.03% or ₹ 20/executed order whichever is lower
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      ₹ 20/executed order
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      STT/CTT
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      No STT
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      No STT
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      Transaction charges
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      NSE: 0.00035%
                      <br />
                      BSE: 0.00045%
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      NSE: 0.0311%
                      <br />
                      BSE: 0.001%
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      GST
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      SEBI charges
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      ₹10 / crore
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      ₹10 / crore
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      Stamp charges
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.0001% or ₹10 / crore on buy side
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.0001% or ₹10 / crore on buy side
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* COMMODITY TAB */}
        {activeTab === "commodity" && (
          <div className="tab-pane fade show active">
            <div className="table-responsive">
              <table
                className="table align-middle m-0"
                style={{ border: "1px solid #dee2e6" }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#fafafa" }}>
                    <th
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    ></th>
                    <th
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#666",
                        fontWeight: "normal",
                      }}
                    >
                      Commodity futures
                    </th>
                    <th
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#666",
                        fontWeight: "normal",
                      }}
                    >
                      Commodity options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      Brokerage
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.03% or Rs. 20/executed order whichever is lower
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      ₹ 20/executed order
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      STT/CTT
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.01% on sell side (Non-Agri)
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.05% on sell side
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      Transaction charges
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      MCX: 0.0021%
                      <br />
                      NSE: 0.0001%
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      MCX: 0.0418%
                      <br />
                      NSE: 0.001%
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      GST
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      SEBI charges
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      Agri:
                      <br />
                      ₹1 / crore
                      <br />
                      Non-agri:
                      <br />
                      ₹10 / crore
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      ₹10 / crore
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "20px",
                        border: "1px solid #dee2e6",
                        color: "#555",
                      }}
                    >
                      Stamp charges
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.002% or ₹200 / crore on buy side
                    </td>
                    <td
                      style={{ padding: "20px", border: "1px solid #dee2e6" }}
                    >
                      0.003% or ₹300 / crore on buy side
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Link */}
      <p className="text-center mt-5 fs-5" style={{ color: "#424242" }}>
        <a
          href="https://zerodha.com/brokerage-calculator#tab-equities"
          style={{
            textDecoration: "none",
            color: "#387ed1",
          }}
        >
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </p>

      {/* Charges for account opening */}
      <div className="mt-5 pt-4 mb-5">
        <h2
          className="mb-4"
          style={{ color: "#424242", fontWeight: "normal", fontSize: "24px" }}
        >
          Charges for account opening
        </h2>
        <div className="table-responsive">
          <table
            className="table align-middle m-0"
            style={{ border: "1px solid #dee2e6" }}
          >
            <thead>
              <tr style={{ backgroundColor: "#fafafa" }}>
                <th
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#666",
                    fontWeight: "normal",
                    width: "70%",
                  }}
                >
                  Type of account
                </th>
                <th
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#666",
                    fontWeight: "normal",
                  }}
                >
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#424242",
                  }}
                >
                  Online account
                </td>
                <td
                  style={{ padding: "20px", borderBottom: "1px solid #dee2e6" }}
                >
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#4caf50",
                      padding: "6px 12px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    FREE
                  </span>
                </td>
              </tr>
              <tr style={{ backgroundColor: "#fcfcfc" }}>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#424242",
                  }}
                >
                  Offline account
                </td>
                <td
                  style={{ padding: "20px", borderBottom: "1px solid #dee2e6" }}
                >
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#4caf50",
                      padding: "6px 12px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    FREE
                  </span>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#424242",
                  }}
                >
                  NRI account (offline only)
                </td>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#424242",
                  }}
                >
                  ₹ 500
                </td>
              </tr>
              <tr style={{ backgroundColor: "#fcfcfc" }}>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "none",
                    color: "#424242",
                  }}
                >
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "none",
                    color: "#424242",
                  }}
                >
                  ₹ 500
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Demat AMC (Annual Maintenance Charge) */}
      <div className="mt-5 pt-4 mb-5">
        <h2
          className="mb-4"
          style={{ color: "#424242", fontWeight: "normal", fontSize: "24px" }}
        >
          Demat AMC (Annual Maintenance Charge)
        </h2>
        <div className="table-responsive">
          <table
            className="table align-middle m-0"
            style={{ border: "1px solid #dee2e6" }}
          >
            <thead>
              <tr style={{ backgroundColor: "#fafafa" }}>
                <th
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#666",
                    fontWeight: "normal",
                    width: "40%",
                  }}
                >
                  Value of holdings
                </th>
                <th
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#666",
                    fontWeight: "normal",
                  }}
                >
                  AMC
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#424242",
                  }}
                >
                  Up to ₹4 lakh
                </td>
                <td
                  style={{ padding: "20px", borderBottom: "1px solid #dee2e6" }}
                >
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#4caf50",
                      padding: "6px 12px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    FREE*
                  </span>
                </td>
              </tr>
              <tr style={{ backgroundColor: "#fcfcfc" }}>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#424242",
                  }}
                >
                  ₹4 lakh - ₹10 lakh
                </td>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#424242",
                  }}
                >
                  ₹ 100 per year, charged quarterly<sup>*</sup>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "none",
                    color: "#424242",
                  }}
                >
                  Above ₹10 lakh
                </td>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "none",
                    color: "#424242",
                  }}
                >
                  ₹ 300 per year, charged quarterly
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p
          className="mt-3 text-muted"
          style={{ fontSize: "12.5px", lineHeight: "1.6" }}
        >
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA,{" "}
          <a
            href="https://support.zerodha.com/category/account-opening/resident-individual/ri-online/articles/how-to-open-a-basic-service-demat-account-at-zerodha"
            style={{ color: "#387ed1", textDecoration: "none" }}
          >
            click here
          </a>
          .
        </p>
      </div>
      {/* Charges for optional value added services */}
      <div className="mt-5 pt-4">
        <h2
          className="mb-4"
          style={{ color: "#424242", fontWeight: "normal", fontSize: "24px" }}
        >
          Charges for optional value added services
        </h2>
        <div className="table-responsive">
          <table
            className="table align-middle m-0"
            style={{ border: "1px solid #dee2e6" }}
          >
            <thead>
              <tr style={{ backgroundColor: "#fafafa" }}>
                <th
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#666",
                    fontWeight: "normal",
                    width: "30%",
                  }}
                >
                  Service
                </th>
                <th
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#666",
                    fontWeight: "normal",
                    width: "35%",
                  }}
                >
                  Billing Frequency
                </th>
                <th
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#666",
                    fontWeight: "normal",
                  }}
                >
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#424242",
                    fontWeight: "500",
                  }}
                >
                  Tickertape
                </td>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#424242",
                  }}
                >
                  Monthly / Annual
                </td>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#424242",
                  }}
                >
                  Free: 0 | Pro: 249/2399
                </td>
              </tr>
              <tr style={{ backgroundColor: "#fcfcfc" }}>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#424242",
                    fontWeight: "500",
                  }}
                >
                  Smallcase
                </td>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#424242",
                  }}
                >
                  Per transaction
                </td>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #dee2e6",
                    color: "#424242",
                  }}
                >
                  Buy &amp; Invest More: 100 | SIP: 10
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "none",
                    color: "#424242",
                    fontWeight: "500",
                  }}
                >
                  Kite Connect
                </td>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "none",
                    color: "#424242",
                  }}
                >
                  Monthly
                </td>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "none",
                    color: "#424242",
                  }}
                >
                  Connect: 500 | Personal: Free
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* charges explained */}
      <div className="pb-4 mt-5 pt-4">
        <h2
          className="mb-4"
          style={{ color: "#424242", fontWeight: "normal", fontSize: "24px" }}
        >
          Charges explained
        </h2>
        <div className="row align-items-stretch">
          <div className="col-12 col-md-6 mt-3 d-flex flex-column justify-content-between">
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                marginBottom: "15px",
                fontSize: "15px",
              }}
            >
              Securities/Commodities transaction tax
            </h5>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                marginBottom: "15px",
                fontSize: "15px",
              }}
            >
              Transaction/Turnover Charges
            </h5>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                marginBottom: "15px",
                fontSize: "15px",
              }}
            >
              Call & trade
            </h5>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                marginBottom: "15px",
                fontSize: "15px",
              }}
            >
              Stamp charges
            </h5>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                fontSize: "15px",
                marginBottom: "15px",
              }}
            >
              NRI brokerage charges
            </h5>
            <ul
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              <li
                style={{
                  color: "#424242",
                  fontSize: "12px",
                  lineHeight: "1.85",
                }}
              >
                For a non-PIS account, 0.5% or ₹50 per executed order for equity
                and F&O (whichever is lower).
              </li>
              <li
                style={{
                  color: "#424242",
                  fontSize: "12px",
                  lineHeight: "1.85",
                }}
              >
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>

              <li
                style={{
                  color: "#424242",
                  fontSize: "12px",
                  lineHeight: "1.85",
                }}
              >
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                fontSize: "15px",
                marginBottom: "15px",
              }}
            >
              Account with debit balance
            </h5>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                fontSize: "15px",
                marginBottom: "15px",
              }}
            >
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </h5>
            <ul
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              <li
                style={{
                  color: "#424242",
                  fontSize: "12px",
                  lineHeight: "1.85",
                }}
              >
                Equity and Futures - ₹0.01 per crore + GST of the traded value.
              </li>
              <li
                style={{
                  color: "#424242",
                  fontSize: "12px",
                  lineHeight: "1.85",
                }}
              >
                Options - ₹0.01 per crore + GST traded value (premium value).
              </li>

              <li
                style={{
                  color: "#424242",
                  fontSize: "12px",
                  lineHeight: "1.85",
                }}
              >
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                fontSize: "15px",
                marginBottom: "15px",
              }}
            >
              Margin Trading Facility (MTF)
            </h5>
            <ul
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              <li
                style={{
                  color: "#424242",
                  fontSize: "12px",
                  lineHeight: "1.85",
                }}
              >
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </li>
              <li
                style={{
                  color: "#424242",
                  fontSize: "12px",
                  lineHeight: "1.85",
                }}
              >
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>

              <li
                style={{
                  color: "#424242",
                  fontSize: "12px",
                  lineHeight: "1.85",
                }}
              >
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 mt-3 d-flex flex-column justify-content-between">
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                fontSize: "15px",
                marginBottom: "15px",
              }}
            >
              GST
            </h5>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                fontSize: "15px",
                marginBottom: "15px",
              }}
            >
              SEBI Charges
            </h5>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                fontSize: "15px",
                marginBottom: "15px",
              }}
            >
              DP (Depository participant) charges
            </h5>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
            </p>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                fontSize: "15px",
                marginBottom: "15px",
              }}
            >
              Pledging charges
            </h5>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              ₹30 + GST per pledge request per ISIN.
            </p>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                fontSize: "15px",
                marginBottom: "15px",
              }}
            >
              AMC (Account maintenance charges)
            </h5>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA,{" "}
              <a
                href="https://support.zerodha.com/category/account-opening/resident-individual/ri-charges/articles/what-is-the-annual-maintenance-charge"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#387ed1", textDecoration: "none" }}
              >
                Click here
              </a>
            </p>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC,{" "}
              <a
                href="https://support.zerodha.com/category/account-opening/resident-individual/ri-charges/articles/what-is-the-annual-maintenance-charge"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#387ed1", textDecoration: "none" }}
              >
                Click here
              </a>
            </p>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                fontSize: "15px",
                marginBottom: "15px",
              }}
            >
              Corporate action order charges
            </h5>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                fontSize: "15px",
                marginBottom: "15px",
              }}
            >
              Off-market transfer charges
            </h5>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              ₹25 per transaction.
            </p>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                fontSize: "15px",
                marginBottom: "15px",
              }}
            >
              Physical CMR request
            </h5>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                fontSize: "15px",
                marginBottom: "15px",
              }}
            >
              Payment gateway charges
            </h5>
            <p
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>
            <h5
              style={{
                color: "#424242",
                fontWeight: "410",
                fontSize: "15px",
                marginBottom: "15px",
              }}
            >
              Trading using 3-in-1 account with block functionality
            </h5>
            <ul
              style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}
            >
              <li
                style={{
                  color: "#424242",
                  fontSize: "12px",
                  lineHeight: "1.85",
                }}
              >
                Delivery & MTF Brokerage: 0.5% per executed order.
              </li>
              <li
                style={{
                  color: "#424242",
                  fontSize: "12px",
                  lineHeight: "1.85",
                }}
              >
                Intraday Brokerage: 0.05% per executed order.
              </li>
            </ul>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <h5
            style={{
              color: "#424242",
              fontWeight: "410",
              fontSize: "15px",
              marginBottom: "15px",
            }}
          >
            Disclaimer
          </h5>
          <p style={{ color: "#424242", fontSize: "12px", lineHeight: "1.85" }}>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
