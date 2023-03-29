import React from "react";
import "./BaslikBolumu.css";

const BaslikBolumu = (props) => {
  return (
    <div>
      <div className="container">
        <div className="baslik">
          <h2>Astronomy Photo Of The Day</h2>
          <span role="img" aria-label="go!">
            🚀
          </span>
        </div>
        <div className="aciklama">
          <p>
            There is a popular website published by NASA's Goddard Space Flight
            Center that features a new astronomy-related photograph and
            scientific explanation every day. Since June 16, 1995, over 3600
            images have been published on this site and are continuing to be
            made available to astronomy enthusiasts through internet mirrors
            that are published in an increasing number of languages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BaslikBolumu;
