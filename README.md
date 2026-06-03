# Zerodha Clone

A full-stack web application that replicates the core user interface and trading experience of the popular Zerodha stock investing platform. This project allows users to create accounts, check real-time stock listings, view their asset portfolios, and simulate placing buy or sell market orders.

🔗 **Live Production Link:** [https://zerodha-clone-orpin-tau.vercel.app/](https://zerodha-clone-orpin-tau.vercel.app/)

---

## 🚀 Key Features

* **User Authentication:** Fully working registration (Sign Up) and login forms to access private workspace accounts.
* **Interactive Market Watchlist:** Live tracking view of prominent market indices and tech stocks (INFY, TCS, HDFC, etc.) with functional quick action triggers.
* **Live Dashboard Metrics:** Displays current equity investments, average prices, net gains/losses, and fractional daily percentage movements.
* **Simulated Ordering Engine:** Allows users to place trade entries via specialized transaction pop-ups that record directly to a secure data stream.
* **Clean & Responsive UI:** Crafted with highly modern, minimal aesthetics true to the authentic corporate identity of real-world financial platforms.

---

## 📂 Project Structure

This repository is organized cleanly into two primary working folders:

```text
Zerodha Clone/
│
├── backend/                  # The Server-side Pipeline
│   ├── model/                # Structural Data Definitions
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   ├── PositionsModel.js
│   │   └── UserModel.js
│   ├── schemas/              # Document Framework Rules
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   ├── index.js              # Application Gateway & Entry Point
│   └── package.json          # Server Application Settings
│
└── frontend/                 # The Client-side User Interface
    ├── public/               # Static Web Media and Icons
    └── src/                  # Active React Application Components
        ├── dashboard/        # Specialized Portfolio Panels
        │   ├── BuyActionWindow.js
        │   ├── DashboardPage.js
        │   ├── Portfolio.js
        │   └── Watchlist.js
        ├── landing_page/     # Public Platform Marketing Pages
        │   ├── about/
        │   ├── home/
        │   ├── pricing/
        │   └── product/
        ├── signup/           # Security Registration Controls
        │   └── Signup.js
        └── support/          # Portal Help Desk Panels
            └── SupportPage.js
```

# Built With
- **Frontend UI:** React.js, HTML5, CSS3, Bootstrap 5 (for rapid, modern responsive layouts)

- **Backend Runtime:** Node.js, Express.js (for high-speed request and route handling)

- **Database Engine:** MongoDB, Mongoose (for cloud document storage and data schema definitions)

- **Hosting Pipelines:** Render (Backend API Service) and Vercel (Frontend Application Deployment)

# Quick Installation Guide
To run this platform completely on your local computer, follow these simple terminal directions.

## 1. Set Up the Backend Server
Open your system terminal and navigate into the backend folder:
```bash
cd backend
npm install
npm start
```
> Note: Ensure you create a local `.env` file containing your `MONGO_URL` string inside the backend root folder before running.

## 2. Set Up the Frontend Interface
Open a separate terminal pane and navigate into the frontend folder:
```bash
cd ../frontend
npm install
npm start
```
Your web browser will automatically load the platform at [http://localhost:3000](http://localhost:3000).
