import React from "react";
import Image from "next/image";
import ApartmentInformationIcon from "../public/assets/img/ApartmentInformationIcon.svg";
import ApartmentInformationIcon2 from "../public/assets/img/ApartmentInformationIcon-2.svg";
import ApartmentInformationIcon3 from "../public/assets/img/ApartmentInformationIcon-7.svg";
import ApartmentInformationIcon4 from "../public/assets/img/ApartmentInformationIcon-8.svg";

const ApartmentStepHeader = ({ currentStep }) => {
  return (
    <div className="ApartmentStepHeader">
      <div className="row">
        <div className="col-lg-12">
          <div className="ApartmentStepHeaderLeft">
            <h3 className="mdHeading">
              Case ID: <span>#22376</span>
            </h3>
            <h3 className="mdHeading">
              Case Reported Date & Time: <span>30/10/2024 04:36 PM</span>
            </h3>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ApartmentStepHeaderLeft ApartmentInformationStepCol ">
            <div className="ApartmentStepBoxHeader">
              <h1 className="lgHeading">
                <Image
                  src={ApartmentInformationIcon}
                  alt="Apartment Information Icon"
                  className="apartmentInformationIcon"
                />
                Apartment Information
              </h1>
            </div>

            <h3 className="mdHeading">
              Name: <span>Maplewood Heights</span>
            </h3>
            <h3 className="mdHeading">
              Address:{" "}
              <span>123 Elm Street, Unit 402, Springfield, IL 62704</span>
            </h3>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ApartmentStepHeaderLeft ApartmentInformationStepCol ">
            <div className="ApartmentStepBoxHeader">
              <h1 className="lgHeading">
                <Image
                  src={ApartmentInformationIcon2}
                  alt="Apartment Information Icon"
                  className="apartmentInformationIcon"
                />
                Case Created By
              </h1>

              <a href="#" className="smBtnGry">
                Owner
              </a>
            </div>

            <h3 className="mdHeading">
              Name: <span>John Doe</span>
            </h3>
            <h3 className="mdHeading contactHeading">
              Contact Information:{" "}
              <a href="tel:5551234567" className="mdLink">
                <span>(555) 123-4567</span>
              </a>
            </h3>
          </div>
        </div>
        <div className={`col-lg-6 ${currentStep === 3 ? "d-block" : "d-none"}`}>
          <div className="ApartmentStepHeaderLeft ApartmentInformationStepCol ">
            <div className="ApartmentStepBoxHeader">
              <h1 className="lgHeading">
                <Image
                  src={ApartmentInformationIcon3}
                  alt="Apartment Information Icon"
                  className="apartmentInformationIcon"
                />
                Owner Details
              </h1>
            </div>

            <h3 className="mdHeading">
              Name: <span>John Doe</span>
            </h3>
            <h3 className="mdHeading contactHeading">
              Contact Information:{" "}
              <a href="tel:5551234567" className="mdLink">
                <span>(+555) 123-4567</span>
              </a>
            </h3>
          </div>
        </div>
        <div className={`col-lg-6 ${currentStep === 3 ? "d-block" : "d-none"}`}>
          <div className="ApartmentStepHeaderLeft ApartmentInformationStepCol ">
            <div className="ApartmentStepBoxHeader">
              <h1 className="lgHeading">
                <Image
                  src={ApartmentInformationIcon4}
                  alt="Apartment Information Icon"
                  className="apartmentInformationIcon"
                />
                Tenent Details
              </h1>
            </div>

            <h3 className="mdHeading">
              Name: <span>Alex Turner</span>
            </h3>
            <h3 className="mdHeading contactHeading">
              Contact Information:{" "}
              <a href="tel:5551234567" className="mdLink">
                <span>(+555) 153-3572</span>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentStepHeader;
