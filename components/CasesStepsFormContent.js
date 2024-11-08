import React, { useState } from "react";
import StepSecondContentComponent from "./StepSecondContentComponent.js";
import StepThreeContentComponent from "./StepThreeContentComponent";

const CasesStepsFormContent = () => {
  const [currentStep, setCurrentStep] = useState(3);

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="CasesStepsFormContent">
      <div className="stepfomSmScreenScroller">
        <div className="formStepsContent">
          <div className="stepFromNumberContainer">
            <span
              className={`stepNumber ${currentStep >= 1 ? "active" : ""}`}
              onClick={() => setCurrentStep(1)}
            >
              1
            </span>
            <h3 className="mdHeading">Case Reported</h3>
          </div>
          <div className={`stepLine ${currentStep >= 2 ? "active" : ""}`}></div>
          <div className="stepFromNumberContainer">
            <span
              className={`stepNumber ${currentStep >= 2 ? "active" : ""}`}
              onClick={() => setCurrentStep(2)}
            >
              2
            </span>
            <h3 className="mdHeading">Awaiting Owner Approval</h3>
          </div>
          <div className={`stepLine ${currentStep >= 3 ? "active" : ""}`}></div>
          <div className="stepFromNumberContainer">
            <span
              className={`stepNumber ${currentStep >= 3 ? "active" : ""}`}
              onClick={() => setCurrentStep(3)}
            >
              3
            </span>
            <h3 className="mdHeading">Craftsman Assigned</h3>
          </div>
          <div className={`stepLine ${currentStep >= 4 ? "active" : ""}`}></div>
          <div className="stepFromNumberContainer">
            <span
              className={`stepNumber ${currentStep >= 4 ? "active" : ""}`}
              onClick={() => setCurrentStep(4)}
            >
              4
            </span>
            <h3 className="mdHeading">Work In Progress</h3>
          </div>
          <div className={`stepLine ${currentStep >= 5 ? "active" : ""}`}></div>
          <div className="stepFromNumberContainer">
            <span
              className={`stepNumber ${currentStep >= 5 ? "active" : ""}`}
              onClick={() => setCurrentStep(5)}
            >
              5
            </span>
            <h3 className="mdHeading">Payment Pending</h3>
          </div>
          <div className={`stepLine ${currentStep >= 6 ? "active" : ""}`}></div>
          <div className="stepFromNumberContainer">
            <span
              className={`stepNumber ${currentStep >= 6 ? "active" : ""}`}
              onClick={() => setCurrentStep(6)}
            >
              6
            </span>
            <h3 className="mdHeading">Completed</h3>
          </div>
        </div>
      </div>

      <div className="formStepsContentContainer">
        {currentStep === 1 && <div></div>}
        {currentStep === 2 && (
          <div className="stepContentComponent">
            <StepSecondContentComponent />
          </div>
        )}
        {currentStep === 3 && (
          <div className="stepContentComponent">
            <StepThreeContentComponent currentStep={currentStep} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CasesStepsFormContent;
