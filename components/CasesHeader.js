import React from "react";
import dashboardIcon from "../public/assets/img/dashboard-icon.svg";
import searchIcon from "../public/assets/img/search-icon.svg";
import plusIcon from "../public/assets/img/plus-icon.svg";
import Image from "next/image";

const CasesHeader = ({ setShowNewCaseSelectApartment }) => {
  return (
    <div className="dashHeader">
      <div className="navRight">
        <h1 className="lgHeading">
          Cases{" "}
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

      <div className="navLeft">
        <div className="searchInput">
          <Image src={searchIcon} alt="search" className="searchIcon" />
          <input type="text" className="formControl" placeholder="Search" />
        </div>
        <div className="selectDropdown">
          <select className="form-select" aria-label="Dashboard dropdown">
            <option selected>Filter</option>
            <option value="1">Monthly</option>
            <option value="2">Yearly</option>
          </select>
        </div>

        <button
          href="#"
          className="quickNotesBtn "
          onClick={() => setShowNewCaseSelectApartment(true)}
        >
          {" "}
          <Image
            src={plusIcon}
            alt="new-case-icon"
            className="newCaseIcon"
          />{" "}
          New Case
        </button>
      </div>
    </div>
  );
};

export default CasesHeader;
