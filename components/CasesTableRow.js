import React from "react";
import arrowIcon from "../public/assets/img/arrow-icon.svg";
import Image from "next/image";

const CasesTableRow = ({ priorityLevel, currentStatus }) => {
  return (
    <tr>
      <td className="tableIdData">#C3445</td>
      <td className="tableIdData tableDate">30/10/2024</td>
      <td className="tableTextData">
        <h3 className="mdHeading">Heating issue</h3>
        <p className="smHeading">Tenant has reported a malfu...</p>
      </td>
      <td className="tableTextData">
        <h3 className="mdHeading">John Doe</h3>
        <p className="smHeading smHeadingColor">Property Owner</p>
      </td>
      <td>{priorityLevel}</td>
      <td>{currentStatus}</td>
      <td>
        <div className="arrowIconWrapper">
          <Image src={arrowIcon} alt="more-icon" className="arrowIcon" />
        </div>
      </td>
    </tr>
  );
};

export default CasesTableRow;
