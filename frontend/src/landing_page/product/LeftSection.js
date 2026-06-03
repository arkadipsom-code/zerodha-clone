import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row " style={{ marginTop: "35px", marginBottom: "35px" }}>
        <div className="col-12 col-md-6 p-5">
          <img
            src={imageUrl}
            alt={productName}
            className="image-fluid mb-3"
            style={{ width: "95%" }}
          />
        </div>
        <div className="col-12 col-md-6 py-5 pr-5 mt-5">
          <h1 style={{ fontSize: "24px", fontWeight: "regular" }}>
            {productName}
          </h1>
          <p style={{ lineHeight: "1.9" }}>{productDescription}</p>
          {(tryDemo || learnMore) && (
            <div className="d-flex gap-5 mt-4">
              {tryDemo && (
                <a href={tryDemo} className="text-decoration-none">
                  Try Demo <i className="fas fa-arrow-right"></i>
                </a>
              )}
              {learnMore && (
                <a href={learnMore} className="text-decoration-none">
                  Learn More <i className="fas fa-arrow-right"></i>
                </a>
              )}
            </div>
          )}
          {(googlePlay || appStore) && (
            <div className="d-flex gap-3 mt-4">
              {googlePlay && (
                <a href={googlePlay}>
                  <img
                    src="./media/images/googlePlayBadge.svg"
                    alt="Google Play"
                    className="img-fluid"
                  />
                </a>
              )}
              {appStore && (
                <a href={appStore}>
                  <img
                    src="./media/images/appStoreBadge.svg"
                    alt="App Store"
                    className="img-fluid"
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
