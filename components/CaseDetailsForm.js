import React from "react";
import CaseDetailsSection from "./CaseDetailsSection";
import UploadFileSection from "./UploadFileSection.js"; 
import RightArrowIcon from "../public/assets/img/right-arrow.svg";
import LeftArrowIcon from "../public/assets/img/left-arrow.svg";
import Image from "next/image";

const CaseDetailsForm = ({
  prevStep,
  nextStep,
  caseDescription,
  setCaseDescription,
}) => {
  return (
    <>
      <CaseDetailsSection
        checkValue={false}
        caseDescription={caseDescription}
        setCaseDescription={setCaseDescription}
      />
      <UploadFileSection />

      <div className="caseAppatementStepChangeBtn">
        <button className={`backBtn contactOwnerBtn`} onClick={prevStep}>
          <Image
            src={LeftArrowIcon}
            alt="Left Arrow Icon"
            className="leftArrowIcon"
          />
          Previous
        </button>
        <button className={`mainBtnGreen`} onClick={nextStep}>
          Next
          <Image
            src={RightArrowIcon}
            alt="Right Arrow Icon"
            className="rightArrowIcon"
          />
        </button>
      </div>
    </>
  );
};

export default CaseDetailsForm;
