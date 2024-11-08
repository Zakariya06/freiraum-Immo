import React from "react";
import CasesReviewSubmitFormHeader from "./CasesReviewSubmitFormHeader";
import CaseDetailsSection from "./CaseDetailsSection";
import UploadFileImageSection from "./UploadFileImageSection";  
import LeftArrowIcon from "../public/assets/img/left-arrow.svg";
import Image from "next/image";

const CasesReviewSubmitForm = ({
  caseDescription,
  setCaseDescription,
  prevStep,
  nextStep,
}) => {
  let caseDescriptionValue =
    "The tenant has reported a malfunction in the heating system, specifically indicating a lack of hot water in the unit. This issue has been classified as Very Urgent, requiring immediate attention to ensure tenant comfort and safety, especially during colder months.";

  return (
    <>
      <CasesReviewSubmitFormHeader />
      <CaseDetailsSection
        checkValue={true}
        caseDescription={(caseDescription = caseDescriptionValue)}
        setCaseDescription={setCaseDescription}
      />
      <UploadFileImageSection />

      <div className="caseAppatementStepChangeBtn">
        <button className={`backBtn contactOwnerBtn`} onClick={prevStep}>
          <Image
            src={LeftArrowIcon}
            alt="Left Arrow Icon"
            className="leftArrowIcon"
          />
          Previous
        </button>
        <button className={`mainBtnGreen`}>Submit</button>
      </div>
    </>
  );
};

export default CasesReviewSubmitForm;
