import React from "react";
import CasesData from "./CasesData";
import CaseDetails from "./CaseDetails";

const CasesDetailsPageWrpper = ({
  setActivePage,
  setShowNewCaseSelectApartment,
}) => {
  return (
    <>
      <CasesData
        setShowNewCaseSelectApartment={setShowNewCaseSelectApartment}
      />

      {/* this is the cases deatil components */}
      {/* <CaseDetails setShowNewCaseSelectApartment={setShowNewCaseSelectApartment} /> */}
    </>
  );
};

export default CasesDetailsPageWrpper;
