import React from "react";
import Image from "next/image";
import selectGilaryImg from "../public/assets/img/select-gallery-icon.svg";
import arrowDown from "../public/assets/img/arrowDown.svg";
import selectImgae from "../public/assets/img/attached-image-1.png";

const UploadFileImageSection = () => {
  const handleFileUpload = () => {
    let fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.click();
    fileInput.onchange = () => {
      console.log(fileInput.files[0]);
    };
  };
  return (
    <div className="CaseDetailsStepContent OwnerInformationStepContent uploadFileSection">
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
            <div className="col-lg-5">
              <div className="uloadImageContainer" onClick={handleFileUpload}>
                <Image
                  src={selectImgae}
                  alt="selectGilaryImg"
                  className="uploadFileImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFileImageSection;
