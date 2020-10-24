import React from "react";
import dwellinglylogo from "../assets/images/dwellingly_logo_white.png";
import { Modal } from "../components/Modal";
const NoMatch = () => {

  return (
    <div className-="no-match__container">
      <Modal titleText="404" contentText="We can't find the page you're looking for." hasButtons={false}> <img src={dwellinglylogo} alt="dwellingly logo" /> </Modal>
    </div>
  );
};

export default NoMatch;
