import React from "react";
import CasesBox from "./CasesBox";

const DashCasesWrok = () => {
  const casesData = [
    {
      caseHeading: "Total Cases",
      caseNumber: "390",
      caseSmallText: "from last week",
    },
    {
      caseHeading: "Open Cases",
      caseNumber: "32",
      caseSmallText: "from last week",
    },
    {
      caseHeading: "Closed Cases",
      caseNumber: "102",
      caseSmallText: " from last week",
    },
    {
      caseHeading: "My Work",
      caseNumber: "256",
      caseSmallText: " from last week",
    },
  ];

  return (
    <div className="dashCasesWrok">
      <div className="row">
        {casesData.map((item, inex) => {
          return (
            <CasesBox
              heading={item.caseHeading}
              number={item.caseNumber}
              smallText={item.caseSmallText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashCasesWrok;
