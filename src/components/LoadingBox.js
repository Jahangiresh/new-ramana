import React from "react";
import { Waveform } from "@uiball/loaders";
import "../assets/css/loadingbox.scss";
const LoadingBox = () => {
  return (
    <div className="loadingbox">
      {/* <Waveform size={40} lineWeight={3.5} speed={1} color="black" /> */}
      <div className="spinner">
        <span>R</span>
        <span>A</span>
        <span>M</span>
        <span>A</span>
        <span>N</span>
        <span>A</span>
      </div>
    </div>
  );
};

export default LoadingBox;
