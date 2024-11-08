import React, { useState } from "react";
import SelectApartmentSection from "./SelectApartmentSection";
import SelectApartmentCardDetailsSection from "./SelectApartmentCardDetailsSection";
import RightArrowIcon from "../public/assets/img/right-arrow.svg";
import LeftArrowIcon from "../public/assets/img/left-arrow.svg";
import Image from "next/image";

const SelectApartmentForm = ({ nextStep, prevStep }) => {
  const [selectedApartment, setSelectedApartment] = useState("");

  const handleSelectApartment = (e) => {
    setSelectedApartment(e.target.value);
  };

  return (
    <>
      <SelectApartmentSection handleSelectApartment={handleSelectApartment} />
      {selectedApartment === "Maplewood Heights elementary" && (
        <SelectApartmentCardDetailsSection />
      )}
      <div className="row">
        <div className="col-lg-6 ms-auto">
          <div className="caseAppatementStepChangeBtn">
            <button
              className={`backBtn contactOwnerBtn ${
                selectedApartment === "Maplewood Heights elementary"
                  ? "d-flex"
                  : "d-none"
              }`}
              onClick={prevStep}
            >
              <Image
                src={LeftArrowIcon}
                alt="Left Arrow Icon"
                className="leftArrowIcon"
              />
              Previous
            </button>
            <button
              className={`mainBtnGreen ${
                selectedApartment === "Maplewood Heights elementary"
                  ? ""
                  : "stepSectionDisabled"
              }`}
              onClick={nextStep}
            >
              Next
              <Image
                src={RightArrowIcon}
                alt="Right Arrow Icon"
                className="rightArrowIcon"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectApartmentForm;
