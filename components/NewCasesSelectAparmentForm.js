import React, { useState } from "react";
import SelectApartmentForm from "./SelectApartmentForm";
import CaseDetailsForm from "./CaseDetailsForm";
import CasesReviewSubmitForm from "./CasesReviewSubmitForm";

const NewCasesSelectAparmentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [caseDescription, setCaseDescription] = useState("");

  return (
    <div className="CasesStepsFormContent newCasesSelectAparmentForm">
      <div className="stepfomSmScreenScroller">
        <div className="formStepsContent">
          <div className="stepFromNumberContainer">
            <span
              className={`stepNumber ${currentStep >= 1 ? "active" : ""}`}
              onClick={() => setCurrentStep(1)}
            >
              1
            </span>
            <h3 className="mdHeading">Select Apartment</h3>
          </div>
          <div
            className={`stepLine ${
              currentStep >= 2 ? "active " : " haflWidth"
            }`}
          ></div>
          <div className="stepFromNumberContainer">
            <span
              className={`stepNumber ${currentStep >= 2 ? "active " : ""}`}
              onClick={() => setCurrentStep(2)}
            >
              2
            </span>
            <h3 className="mdHeading">Case Details</h3>
          </div>
          <div
            className={`stepLine ${currentStep >= 3 ? "active " : ""}`}
          ></div>
          <div className="stepFromNumberContainer">
            <span
              className={`stepNumber ${currentStep >= 3 ? "active" : ""}`}
              onClick={() => setCurrentStep(3)}
            >
              3
            </span>
            <h3 className="mdHeading">Review & Submit</h3>
          </div>
        </div>
      </div>

      <div className="formStepsContentContainer">
        {currentStep === 1 && (
          <div className="stepContentComponent">
            <SelectApartmentForm nextStep={nextStep} prevStep={prevStep} />
          </div>
        )}
        {currentStep === 2 && (
          <div className="stepContentComponent">
            <CaseDetailsForm
              nextStep={nextStep}
              prevStep={prevStep}
              caseDescription={caseDescription}
              setCaseDescription={setCaseDescription}
            />
          </div>
        )}
        {currentStep === 3 && (
          <div className="stepContentComponent">
            <CasesReviewSubmitForm
              caseDescription={caseDescription}
              setCaseDescription={setCaseDescription}
              prevStep={prevStep}
              nextStep={nextStep}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewCasesSelectAparmentForm;
