import React from "react";

import Navbar from "../Navbar";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />

      {/* Kite */}
      <LeftSection
        imageUrl={"./media/images/kite.png"}
        productName={"Kite"}
        productDescription={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        tryDemo={"https://kite-demo.zerodha.com/dashboard"}
        learnMore={"https://zerodha.com/products/kite/"}
        googlePlay={
          "https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        }
        appStore={
          "https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
        }
      />

      {/* Console */}
      <RightSection
        imageUrl={"./media/images/products-console.png"}
        productName={"Console"}
        productDescription={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        learnMore={"https://zerodha.com/products/kite/"}
      />

      {/* Coin */}
      <LeftSection
        imageUrl={"./media/images/products-coin.png"}
        productName={"Coin"}
        productDescription={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        learnMore={"https://coin.zerodha.com/"}
        googlePlay={
          "https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        }
        appStore={
          "https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
        }
      />

      {/* Kite Connect API */}
      <RightSection
        imageUrl={"./media/images/landing.svg"}
        productName={"Kite Connect API"}
        productDescription={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        learnMore={"https://zerodha.com/products/kite/"}
      />

      {/* Varsity */}
      <LeftSection
        imageUrl={"./media/images/varsity-products.svg"}
        productName={"Varsity mobile"}
        productDescription={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        googlePlay={
          "https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        }
        appStore={
          "https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
        }
      />
      <Universe />
    </>
  );
}

export default ProductPage;
