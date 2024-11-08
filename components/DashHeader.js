import React from "react";
import dashboardIcon from "../public/assets/img/dashboard-icon.svg";
import Image from "next/image";

const DashHeader = () => {
  return (
    <div className="dashHeader">
      <div className="navRight">
        <h1 className="lgHeading">
          Dashboard{" "}
          <Image
            src={dashboardIcon}
            alt="dashboard"
            className="dashBoardIcon"
          />
        </h1>
        <p className="mainText">
          Lorem ipsum dolor sit amet consectetur adipiscing
        </p>
      </div>
      <div className="selectDropdown">
        <select className="form-select" aria-label="Dashboard dropdown">
          <option selected>Weekly</option>
          <option value="1">Monthly</option>
          <option value="2">Yearly</option>
        </select>
      </div>
    </div>
  );
};

export default DashHeader;
