import React from "react";
import Image from "next/image";
import caseIcon from "../public/assets/img/case-filter-icon.svg";
import approvalIcon from "../public/assets/img/approval-icon.svg";
import statusIcon from "../public/assets/img/status-icon.svg";
import urgentIcon from "../public/assets/img/urgent-icon.svg";
import approvalPendingIcon from "../public/assets/img/approval-pending-icon.svg";
import CasesTableRow from "./CasesTableRow";

const CasesTable = () => {
  const priorityLevel = {
    appovalBtn: (
      <button className="argentBtn appovalBtn">
        <Image src={approvalIcon} alt="urgent-icon" className="urgentIcon" />{" "}
        Approval Pending
      </button>
    ),

    appovalPendingBtn: (
      <button className="argentBtn appovalBtn">
        <Image
          src={approvalPendingIcon}
          alt="urgent-icon"
          className="urgentIcon"
        />{" "}
        Attention Needed
      </button>
    ),

    urgentBtn: (
      <button className="argentBtn">
        <Image src={urgentIcon} alt="urgent-icon" className="urgentIcon" />{" "}
        Highly Critical
      </button>
    ),

    urgentGrayBtn: (
      <button className="argentBtn argentGrayBtn">
        <Image src={urgentIcon} alt="urgent-icon" className="urgentIcon" />{" "}
        Urgent
      </button>
    ),

    statusApprovedBtn: (
      <button className="argentBtn statusApprovedBtn">
        <Image src={statusIcon} alt="status-icon" className="statusIcon" />{" "}
        Owner Approved
      </button>
    ),
  };

  return (
    <div className="casesTableContainer">
      <table className="casesTable">
        <thead>
          <tr>
            <td className="tableHeading">
              Case id <Image src={caseIcon} alt="case" className="caseIcon" />
            </td>
            <td className="tableHeading">
              Date <Image src={caseIcon} alt="case" className="caseIcon" />
            </td>
            <td className="tableHeading">Case Category</td>
            <td className="tableHeading">Created by</td>
            <td className="tableHeading">Priority Level</td>
            <td className="tableHeading">Approval status</td>
            <td className="tableHeading"></td>
          </tr>
        </thead>
        <tbody>
          <CasesTableRow
            priorityLevel={priorityLevel.appovalPendingBtn}
            currentStatus={priorityLevel.statusApprovedBtn}
          />
          <CasesTableRow
            priorityLevel={priorityLevel.urgentGrayBtn}
            currentStatus={priorityLevel.appovalBtn}
          />
          <CasesTableRow
            priorityLevel={priorityLevel.urgentGrayBtn}
            currentStatus={priorityLevel.statusApprovedBtn}
          />
          <CasesTableRow
            priorityLevel={priorityLevel.urgentBtn}
            currentStatus={priorityLevel.statusApprovedBtn}
          />
          <CasesTableRow
            priorityLevel={priorityLevel.urgentBtn}
            currentStatus={priorityLevel.statusApprovedBtn}
          />
          <CasesTableRow
            priorityLevel={priorityLevel.appovalPendingBtn}
            currentStatus={priorityLevel.appovalBtn}
          />
        </tbody>
      </table>
    </div>
  );
};

export default CasesTable;
