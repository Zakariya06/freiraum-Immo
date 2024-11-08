import React from "react";
import Image from "next/image";
import ApartmentInformationIcon4 from "../public/assets/img/ApartmentInformationIcon-4.svg";
import arrowDown from "../public/assets/img/arrowDown.svg";
import approvalIcon from "../public/assets/img/approval-btn-icon.svg";
import approvalCheckIcon from "../public/assets/img/approval-check-icon.svg";

const OwnerApprovalStatus = ({
  currentStep,
  approvalStatus,
  setApprovalStatus,
}) => {
  return (
    <div className="CaseDetailsStepContent OwnerInformationStepContent">
      <div className="ApartmentStepHeaderLeft ApartmentInformationStepCol ">
        <div className="stepDetailContentHeader">
          <h1 className="lgHeading">
            <Image
              src={ApartmentInformationIcon4}
              alt="Apartment Information Icon"
              className="apartmentInformationIcon"
            />
            Owner Approval Status
          </h1>
          <Image src={arrowDown} alt="arrowDown" className="arrowDownIcon" />
        </div>

        {currentStep === 3 ? (
          <button className="argentBtn approvalCheckBtn">
            <Image
              src={approvalCheckIcon}
              alt="approvalIcon"
              className="approvalIcon"
            />
            Owner Approved
          </button>
        ) : (
          <button className="argentBtn appovalBtn">
            <Image
              src={approvalIcon}
              alt="approvalIcon"
              className="approvalIcon"
            />
            Owner Approval Needed
          </button>
        )}

        <h3 className="mdHeading mt-2">
          Note:{" "}
          <span>
            Email notification sent to the owner, awaiting response to proceed
            with repair. Admin can update status If no response within two days
          </span>
        </h3>

        <div className="stepsStatusForm">
          <h5 className="lgHeading">Update Approval Status</h5>
          <h6 className="mdHeading">
            Will allow you to assign craftsman for this case.
          </h6>

          <div className="stepFromGroup">
            <div className="selectDropdown">
              <select
                className="form-select"
                aria-label="Dashboard dropdown"
                onChange={(e) => {
                  setApprovalStatus(e.target.value);
                }}
              >
                <option value="Change Status">Change Status</option>
                <option value="Owner Approved">Owner Approved</option>
                <option value="Owner Approval Needed">
                  Owner Approval Needed
                </option>
              </select>
            </div>
            <button className="mainBtnGreen">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerApprovalStatus;
