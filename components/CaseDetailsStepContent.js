import React from "react";
import Image from "next/image";
import ApartmentInformationIcon3 from "../public/assets/img/ApartmentInformationIcon-3.svg";
import arrowDown from "../public/assets/img/arrowDown.svg";
import urgentIcon from "../public/assets/img/urgent-icon.svg";
import attachedImageIcon from "../public/assets/img/attachedImage-icon.svg";
import attachedImage from "../public/assets/img/attached-image-1.png";

const CaseDetailsStepContent = () => {
  const uploadImage = (e) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.click();

    fileInput.onchange = (e) => {
      const file = e.target.files[0];
    };
  };
  return (
    <div className="CaseDetailsStepContent">
      <div className="ApartmentStepHeaderLeft ApartmentInformationStepCol ">
        <div className="stepDetailContentHeader">
          <h1 className="lgHeading">
            <Image
              src={ApartmentInformationIcon3}
              alt="Apartment Information Icon"
              className="apartmentInformationIcon"
            />
            Case Details
          </h1>
          <Image src={arrowDown} alt="arrowDown" className="arrowDownIcon" />
        </div>
        <h3 className="mdHeading">
          Category: <span>Heating</span>
        </h3>
        <h3 className="mdHeading mt-2">
          Description:{" "}
          <span>
            {" "}
            The tenant has reported a malfunction in the heating system,
            specifically indicating a lack of hot water in the unit. This issue
            has been classified as Very Urgent, requiring immediate attention to
            ensure tenant comfort and safety, especially during colder months.
          </span>{" "}
        </h3>

        <div className="stepOrgenbtnContainer">
          <button className="argentBtn">
            <Image src={urgentIcon} alt="urgent-icon" className="urgentIcon" />{" "}
            Urgent
          </button>
        </div>

        <div className="stepDetailContentHeader">
          <h1 className="lgHeading">
            <Image
              src={attachedImageIcon}
              alt="   Attached Image"
              className="apartmentInformationIcon"
            />
            Attached Image
          </h1>
        </div>

        <div className="col-lg-4">
          <div
            className="attachedImgaeContainer"
            onClick={(e) => {
              uploadImage(e);
            }}
          >
            <Image
              src={attachedImage}
              alt="attachedImage"
              className="attachedImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetailsStepContent;
