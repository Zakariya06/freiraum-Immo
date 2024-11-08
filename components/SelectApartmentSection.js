import React from "react";
import Image from "next/image";
import selectApparmentIcon from "../public/assets/img/select-apparment-icon.svg";
import arrowDown from "../public/assets/img/arrowDown.svg";
import approvalIcon from "../public/assets/img/approval-btn-icon.svg";
import approvalCheckIcon from "../public/assets/img/approval-check-icon.svg";

const SelectApartmentSection = ({ handleSelectApartment }) => {
  return (
    <div className="CaseDetailsStepContent OwnerInformationStepContent selectApartmentSection">
      <div className="ApartmentStepHeaderLeft ApartmentInformationStepCol ">
        <div className="stepDetailContentHeader">
          <h1 className="lgHeading">
            <Image
              src={selectApparmentIcon}
              alt="Apartment Information Icon"
              className="apartmentInformationIcon"
            />
            Select Apartment
          </h1>
          <Image src={arrowDown} alt="arrowDown" className="arrowDownIcon" />
        </div>

        <h3 className="mdHeading mt-4 mb-4">
          Note:
          <span>
            Owner, tenant, and apartment details will be auto-populated based on
            the selected apartment.
          </span>
        </h3>

        <div className="stepsStatusForm p-0">
          <div className="stepFromGroup">
            <div className="selectDropdown">
              <select
                className="form-select"
                aria-label="Dashboard dropdown"
                onChange={(e) => {
                  handleSelectApartment(e);
                }}
              >
                <option value="Change Status">Select Apartment</option>
                <option value="Maplewood Heights elementary">
                  Maplewood Heights elementary
                </option>
                <option value="Maplewood Heights high school">
                  Maplewood Heights high school
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectApartmentSection;
