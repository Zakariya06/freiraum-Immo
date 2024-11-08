import React from "react";
import Image from "next/image";
import newCaseIcon from "../public/assets/img/new-case-icon.svg";
import CaseIcon from "../public/assets/img/case-icon.svg";
import arrowIcon from "../public/assets/img/arrow-icon.svg";
import NewCases from "./NewCases";
import PendingCase from "./PendingCase";
import QuickNotes from "./QuickNotes";
const CasesContentWrapper = () => {
  return (
    <div className="casesContentWrapper">
      <div className="row">
        <NewCases />
        <PendingCase />
        <QuickNotes />
      </div>
    </div>
  );
};

export default CasesContentWrapper;
