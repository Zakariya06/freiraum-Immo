import React, { useState } from "react";
import Image from "next/image";
import casesDetailIcon from "../public/assets/img/cases-detail-icon.svg";
import arrowDown from "../public/assets/img/arrowDown.svg";
import approvalIcon from "../public/assets/img/approval-btn-icon.svg";
import approvalCheckIcon from "../public/assets/img/approval-check-icon.svg";

const CaseDetailsSection = ({
  checkValue,
  caseDescription,
  setCaseDescription,
}) => {
  return (
    <>
      <div className="CaseDetailsStepContent casesDetailsStepContent">
        <div className="ApartmentStepHeaderLeft ApartmentInformationStepCol ">
          <div className="stepDetailContentHeader">
            <h1 className="lgHeading">
              <Image
                src={casesDetailIcon}
                alt="Apartment Information Icon"
                className="apartmentInformationIcon"
              />
              Case Details
            </h1>
            <Image src={arrowDown} alt="arrowDown" className="arrowDownIcon" />
          </div>

          <div className="stepsStatusForm">
            <h5 className="lgHeading">Case Category </h5>
            <h6 className="mdHeading">
              Will allow filtering craftsmen based on the selected category.
            </h6>

            <div className="stepFromGroup">
              <div className="selectDropdown">
                <select className="form-select" aria-label="Dashboard dropdown">
                  <option value="">Select Case Category</option>
                  <option value="Heating">Heating</option>
                  <option value="Plumbing">Plumbing</option>
                </select>
              </div>
            </div>
          </div>

          <div className="stepsStatusForm">
            <h5 className="lgHeading">Case Category </h5>
            <h6 className="mdHeading">
              Will allow filtering craftsmen based on the selected category.
            </h6>

            <div className="stepFromGroup ">
              <textarea
                className="selectDropdown"
                value={caseDescription}
                onChange={(e) => setCaseDescription(e.target.value)}
                rows={3}
                placeholder="Enter Case Description"
              />
            </div>
          </div>

          <div className="stepsStatusForm borderTopDashed">
            <h1 className="lgHeading">Select Case Priority:</h1>

            <div className="paymentcheckInputContainer">
              <div className="paymentcheck">
                <input type="checkbox" className="inputCheck" />
                <label className="inputCheckLabel">Attention Needed</label>
              </div>
              <div className="paymentcheck">
                <input
                  type="checkbox"
                  className="inputCheck"
                  checked={checkValue}
                />
                <label className="inputCheckLabel">Urgrnt</label>
              </div>
              <div className="paymentcheck">
                <input type="checkbox" className="inputCheck" />
                <label className="inputCheckLabel">Highly Critical</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseDetailsSection;
