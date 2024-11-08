import React from "react";
import CasesHeader from "../../components/CasesHeader";
import CasesTableTabs from "../../components/CasesTableTabs";

const CasesData = ({ setShowNewCaseSelectApartment }) => {
  return (
    <>
      <CasesHeader
        setShowNewCaseSelectApartment={setShowNewCaseSelectApartment}
      />
      <CasesTableTabs />
    </>
  );
};

export default CasesData;
