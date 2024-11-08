import React from "react";
import Image from "next/image";
import selectGilaryImg from "../public/assets/img/select-gallery-icon.svg";
import arrowDown from "../public/assets/img/arrowDown.svg";

const UploadFileSection = () => {
  const handleFileUpload = () => {
    let fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.click();
    fileInput.onchange = () => {
      console.log(fileInput.files[0]);
    };
  };
  return (
    <div className="CaseDetailsStepContent OwnerInformationStepContent   uploadFileSection">
      <div className="ApartmentStepHeaderLeft ApartmentInformationStepCol ">
        <div className="stepDetailContentHeader">
          <h1 className="lgHeading">
            <Image
              src={selectGilaryImg}
              alt="Apartment Information Icon"
              className="apartmentInformationIcon"
            />
            Upload Image
          </h1>
          <Image src={arrowDown} alt="arrowDown" className="arrowDownIcon" />
        </div>

        <h3 className="mdHeading mt-4 mb-4">
          Please attach a clear image of the issue to help us analyze the
          problem more effectively.
        </h3>

        <div className="stepsStatusForm  p-0">
          <div className="stepFromGroup">
            <div className="uploadFileWrapper" onClick={handleFileUpload}>
              <div className="uploadFileContainer">
                <h3 className="mdHeading">
                  Drop your image here <br /> <span>or Browse files</span>
                </h3>
                <p className="mainText">
                  Banner size must be 1920px * 1080 px, <br /> supports PNG,
                  JPG, JPEG upto 5 MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFileSection;
