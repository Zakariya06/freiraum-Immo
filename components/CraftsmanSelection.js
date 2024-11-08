import React from "react";
import Image from "next/image";
import CarftManCard from "./CarftManCard.js";
import ApartmentInformationIcon5 from "../public/assets/img/ApartmentInformationIcon-5.svg";
import arrowDown from "../public/assets/img/arrowDown.svg";
import craftsmanIcon from "../public/assets/img/crafts-man-img-1.png";
import craftsmanIcon2 from "../public/assets/img/crafts-man-img-2.png";
import craftsmanIcon3 from "../public/assets/img/crafts-man-img-3.png";
import checkIcon from "../public/assets/img/btn-check-icon.svg";
import resposiveIcon from "../public/assets/img/btn-time-icon.svg";
import deadlineIcon from "../public/assets/img/deadline-icon.svg";

const CraftsmanSelection = ({ approvalStatus }) => {
  const contractorsData = [
    {
      image: craftsmanIcon,
      name: "Alex Turner",
      id: "CRFT-001",
      service: "Electrical Repairs & Installations",
      license: "Yes",
      availability: "Monday to Friday, 9 AM - 5 PM",
      cost: "$150/hour",
      contact: "+1 (555) 123-4567",
      status: "Accepted",
      statusIcon: checkIcon,
      statusBtnBg: "",
    },
    {
      image: craftsmanIcon2,
      name: "Liam Hayes",
      id: "CRFT-031",
      service: "Electrical Repairs & Installations",
      license: "Yes",
      availability: "Monday to Friday, 9 AM - 5 PM",
      cost: "$140/hour",
      contact: "+1 (555) 123-4567",
      status: "No Response",
      statusIcon: resposiveIcon,
      statusBtnBg: "responseTimeBtn",
    },
    {
      image: craftsmanIcon3,
      name: "Liam Hayes",
      id: "CRFT-031",
      service: "Electrical Repairs & Installations",
      license: "Yes",
      availability: "Monday to Friday, 9 AM - 5 PM",
      cost: "$140/hour",
      contact: "+1 (555) 123-4567",
      status: "Declined",
      statusIcon: deadlineIcon,
      statusBtnBg: "dedlineBtn",
    },
  ];

  return (
    <div className="CaseDetailsStepContent OwnerInformationStepContent ">
      <div
        className={`ApartmentStepHeaderLeft ApartmentInformationStepCol ${
          approvalStatus != "Owner Approved" ? "stepSectionDisabled" : ""
        }`}
      >
        <div className="stepDetailContentHeader">
          <h1 className="lgHeading">
            <Image
              src={ApartmentInformationIcon5}
              alt="Apartment Information Icon"
              className="apartmentInformationIcon"
            />
            Craftsman Selection
          </h1>
          <Image src={arrowDown} alt="arrowDown" className="arrowDownIcon" />
        </div>

        <h3 className="mdHeading mt-4 mb-4">
          Note:{" "}
          <span>
            Select a craftsman based on their specialization, availability, and
            past performance; if needed, you can assign additional workers for
            timely repairs.
          </span>
        </h3>

        <div className="stepsStatusForm p-0 pb-2">
          <div className="stepFromGroup">
            <div className="selectDropdown">
              <select className="form-select" aria-label="Dashboard dropdown">
                <option value="Select Craftsman">Select Craftsman</option>
                <option value="Select Craftsman">Select Craftsman</option>
                <option value="Select Craftsman">Select Craftsman</option>
              </select>
            </div>
            <button className="mainBtnGreen">Add</button>
          </div>
        </div>

        <div
          className={`selectCraftMainContainer ${
            approvalStatus != "Owner Approved" ? "d-none" : "d-block"
          }`}
        >
          <h3 className="lgHeading">Selected Craftsman</h3>
          <p className="mainText">You can add or remove craftsmen as needed.</p>

          <div className="row mt-3">
            {contractorsData.map((item, index) => (
              <CarftManCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftsmanSelection;
