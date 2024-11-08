import React from "react";
import dashboardIcon from "../public/assets/img/dashboard-icon.svg";
import backIcon from "../public/assets/img/back-icon.svg";
import Image from "next/image";
import Link from "next/link";

const CasesDetailHeader = ({ none, setShowNewCaseSelectApartment }) => {
  return (
    <>
      <div className="dashHeader">
        <div className="navRight">
          <h1 className="lgHeading">
            Case Details{" "}
            <Image
              src={dashboardIcon}
              alt="dashboard"
              className="dashBoardIcon"
            />
          </h1>
          <p className="mainText">
            Lorem ipsum dolor sit amet consectetur adipiscing
          </p>
        </div>

        <div className={`navLeft ${none}`}>
          <div className="selectDropdown">
            <select className="form-select" aria-label="Dashboard dropdown">
              <option value="Owner Approval State">Owner Approval State</option>
              <option value="Owner Approval State">Owner Approval State</option>
              <option value="Owner Approval State">Owner Approval State</option>
            </select>
          </div>
        </div>
      </div>

      <div className="cassesBackLink">
        <p
          className="backLink"
          onClick={() => setShowNewCaseSelectApartment()}
        >
          Cases
        </p>
        <Image src={backIcon} alt="back" className="backIcon" />
        <p className="backLink active">Case Details</p>
      </div>
    </>
  );
};

export default CasesDetailHeader;
