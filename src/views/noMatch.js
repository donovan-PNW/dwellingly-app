import React from "react";
import dwellinglylogo from "../assets/images/dwellingly_logo_white.png";

const NoMatch = () => {

  return (
    <div className-="no-match-found__container">

      <main className="main-container">

        <h1 className="no-match-found__heading page-title">404</h1>
        <img src={dwellinglylogo} alt="dwellingly logo" />
        <p className="no-match-found__text">
          We can't find the page you're looking for.
        </p>
      </main>

    </div>
  );
};

export default NoMatch;
