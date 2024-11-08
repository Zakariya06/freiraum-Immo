import React from "react";
import Image from "next/image";

import CaseIcon from "../public/assets/img/new-case-icon-2.svg";
import newCaseIcon from "../public/assets/img/new-case-icon.svg";
import arrowIcon from "../public/assets/img/arrow-icon.svg";
import editIcon from "../public/assets/img/editIcon-icon.svg";

const QuickNotes = () => {
  return (
    <div className="col-lg-12">
      <div className="casesContentBox">
        <div className="casesContentHeader">
          <h1 className="lgHeading">
            Quick Notes{" "}
            <Image
              src={newCaseIcon}
              alt="new-case-icon"
              className="newCaseIcon"
            />{" "}
          </h1>
          <a href="#" className="quickNotesBtn">
            {" "}
            <Image
              src={editIcon}
              alt="new-case-icon"
              className="newCaseIcon"
            />{" "}
            New Note
          </a>
        </div>

        <div className="casesContentBody quickNotesBody">
          <div className="contentTabLabel">
            <div className="casesTabLeft">
              <Image src={CaseIcon} alt="case-icon" className="caseIcon" />
              <div className="casesLeftTextContent">
                <h4 className="mdHeading">
                  Greenfield Apts - Electrical Issue - Refer for Later...
                </h4>
                <p className="smHeading">Yesterday</p>
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
                  Greenfield Apts - Electrical Issue - Refer for Later...
                </h4>
                <p className="smHeading">Yesterday</p>
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
                  Greenfield Apts - Electrical Issue - Refer for Later...
                </h4>
                <p className="smHeading">Yesterday</p>
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
                  Greenfield Apts - Electrical Issue - Refer for Later...
                </h4>
                <p className="smHeading">Yesterday</p>
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

export default QuickNotes;
