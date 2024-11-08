import React from "react";
import Image from "next/image";
import contactOwnerIcon from "../public/assets/img/contact-owner-icon.svg";
import emailIcon from "../public/assets/img/email-icon.svg";
import callIcon from "../public/assets/img/call-icon.svg";
import whatsappIcon from "../public/assets/img/whatsapp-icon.svg";
import arrowDown from "../public/assets/img/arrowDown.svg";

const ContactOwnerSection = () => {
  return (
    <div className="CaseDetailsStepContent OwnerInformationStepContent">
      <div className="ApartmentStepHeaderLeft ApartmentInformationStepCol ">
        <div className="stepDetailContentHeader">
          <h1 className="lgHeading">
            <Image
              src={contactOwnerIcon}
              alt="Apartment Information Icon"
              className="apartmentInformationIcon"
            />
            Contact Owner
          </h1>
          <Image src={arrowDown} alt="arrowDown" className="arrowDownIcon" />
        </div>

        <h3 className="mdHeading">
          <span>Contact Options</span>
        </h3>
        <p className="mainText">
          Select a preferred method (Email, Call, or WhatsApp) for the admin to
          reach out to the owner quickly and efficiently.
        </p>

        <div className="stepsStatusForm p-0 pb-2">
          <div className="contactOwnerBtnContainer">
            <a href="#" className="contactOwnerBtn">
              <Image
                src={emailIcon}
                alt="emailIcon"
                className="contactOwnerBtnIcon"
              />{" "}
              Email
            </a>
            <a href="#" className="contactOwnerBtn">
              <Image
                src={callIcon}
                alt="callIcon"
                className="contactOwnerBtnIcon"
              />{" "}
              Call
            </a>
            <a href="#" className="contactOwnerBtn">
              <Image
                src={whatsappIcon}
                alt="whatsappIcon"
                className="contactOwnerBtnIcon"
              />{" "}
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOwnerSection;
