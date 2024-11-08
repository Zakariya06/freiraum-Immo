import React, { useState } from "react";
import CasesDetailHeader from "../../components/CasesDetailHeader";
import CasesStepsFormContent from "../../components/CasesStepsFormContent";

const CaseDetails = ({setShowNewCaseSelectApartment}) => {
  return (
    <>
      <CasesDetailHeader setShowNewCaseSelectApartment={setShowNewCaseSelectApartment} />
      <CasesStepsFormContent />
    </>
  );
};

export default CaseDetails;
