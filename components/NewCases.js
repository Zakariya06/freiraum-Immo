import React from "react";
import Image from "next/image";
import newCaseIcon from "../public/assets/img/new-case-icon.svg";
import CaseIcon from "../public/assets/img/case-icon.svg";
import arrowIcon from "../public/assets/img/arrow-icon.svg";

const NewCases = () => {
  return (
    <div className="col-lg-6">
      <div className="casesContentBox">
        <div className="casesContentHeader">
          <h1 className="lgHeading">
            New Cases{" "}
            <Image
              src={newCaseIcon}
              alt="new-case-icon"
              className="newCaseIcon"
            />{" "}
          </h1>
        </div>

        <div className="casesContentBody">
          <div className="contentTabLabel">
            <div className="casesTabLeft">
              <Image src={CaseIcon} alt="case-icon" className="caseIcon" />
              <div className="casesLeftTextContent">
                <h4 className="mdHeading">
                  Greenfield Apts - Electrical Issue
                </h4>
                <p className="smHeading">Full pre-approval</p>
              </div>
            </div>
            <div className="casesTabRight">
              <button className="argentBtn">Urgent</button>
              <div className="arrowIconWrapper">
                <Image src={arrowIcon} alt="more-icon" className="arrowIcon" />
              </div>
            </div>
          </div>
          <div className="contentTabLabel">
            <div className="casesTabLeft">
              <Image src={CaseIcon} alt="case-icon" className="caseIcon" />
              <div className="casesLeftTextContent">
                <h4 className="mdHeading">
                  Greenfield Apts - Electrical Issue
                </h4>
                <p className="smHeading">Full pre-approval</p>
              </div>
            </div>
            <div className="casesTabRight">
              <button className="argentBtn">Urgent</button>
              <div className="arrowIconWrapper">
                <Image src={arrowIcon} alt="more-icon" className="arrowIcon" />
              </div>
            </div>
          </div>
          <div className="contentTabLabel">
            <div className="casesTabLeft">
              <Image src={CaseIcon} alt="case-icon" className="caseIcon" />
              <div className="casesLeftTextContent">
                <h4 className="mdHeading">
                  Greenfield Apts - Electrical Issue
                </h4>
                <p className="smHeading yellowText">Full pre-approval</p>
              </div>
            </div>
            <div className="casesTabRight">
              <div className="arrowIconWrapper">
                <Image src={arrowIcon} alt="more-icon" className="arrowIcon" />
              </div>
            </div>
          </div>
          <div className="contentTabLabel">
            <div className="casesTabLeft">
              <Image src={CaseIcon} alt="case-icon" className="caseIcon" />
              <div className="casesLeftTextContent">
                <h4 className="mdHeading">
                  Greenfield Apts - Electrical Issue
                </h4>
                <p className="smHeading yellowText">Full pre-approval</p>
              </div>
            </div>
            <div className="casesTabRight">
              <div className="arrowIconWrapper">
                <Image src={arrowIcon} alt="more-icon" className="arrowIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCases;
