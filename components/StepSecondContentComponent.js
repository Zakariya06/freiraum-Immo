import React, {useState} from "react";
import ApartmentStepHeader from "./ApartmentStepHeader";
import CaseDetailsStepContent from "./CaseDetailsStepContent";
import OwnerApprovalStatus from "./OwnerApprovalStatus";
import CraftsmanSelection from "./CraftsmanSelection";
import ContactOwnerSection from "./ContactOwnerSection";
import PaymentCase from "./PaymentCase";

const StepSecondContentComponent = () => {
  const [approvalStatus, setApprovalStatus] = useState("Change Status");

  return (
    <div className="stepTabContentPageWrapper">
      <ApartmentStepHeader />
      <CaseDetailsStepContent />
      <OwnerApprovalStatus setApprovalStatus={setApprovalStatus} />
      <ContactOwnerSection />
      <CraftsmanSelection />
      <PaymentCase />
      <div className="caseDetailCloseSection">
        <a href="#" className="mainBtnGreen stepSectionDisabled">
          Close Case
        </a>
        <h3 className="mdHeading">
          Note:{" "}
          <span>
            Before closing the case, please ensure all information is complete
            and accurate to avoid reopening the case for <br /> any missed
            details.
          </span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default StepSecondContentComponent;
