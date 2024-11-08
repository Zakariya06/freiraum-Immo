import React from "react";

const CasesBox = ({ heading, number, smallText }) => {
  return (
    <div className="col-lg-3">
      <div className="casesBox">
        <h1 className="mdHeading">{heading}</h1>
        <div className="casesBoxBottom">
          <h5 className="lgHeading">{number}</h5>
          <p className="mainText">
            <span>14.26%</span> {smallText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CasesBox;
