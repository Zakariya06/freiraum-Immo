import React from "react";
import CasesDetailHeader from "../../components/CasesDetailHeader";
import NewCasesSelectAparmentForm from "../../components/NewCasesSelectAparmentForm";

const NewCasesSelectAparment = ({ setShowNewCaseSelectApartment }) => {
  return (
    <>
      <CasesDetailHeader
        setShowNewCaseSelectApartment={setShowNewCaseSelectApartment}
        none="d-none"
      />
      <NewCasesSelectAparmentForm />
    </>
  );
};

export default NewCasesSelectAparment;
