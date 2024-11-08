import React from "react";
import Image from "next/image";
import ApartmentInformationIcon6 from "../public/assets/img/ApartmentInformationIcon-6.svg";
import arrowDown from "../public/assets/img/arrowDown.svg";

const PaymentCase = ({ approvalStatus }) => {
  return (
    <div className="CaseDetailsStepContent OwnerInformationStepContent borderBottomNone">
      <div
        className={`ApartmentStepHeaderLeft ApartmentInformationStepCol ${
          approvalStatus != "Owner Approved" ? "stepSectionDisabled" : ""
        }`}
      >
        <div className="stepDetailContentHeader">
          <h1 className="lgHeading">
            <Image
              src={ApartmentInformationIcon6}
              alt="Apartment Information Icon"
              className="apartmentInformationIcon"
            />
            Payment
          </h1>
          <Image src={arrowDown} alt="arrowDown" className="arrowDownIcon" />
        </div>

        <h3 className="mdHeading mt-4 mb-4">
          Note:{" "}
          <span>
            Ensure payments for completed repairs are processed promptly; verify
            invoices against work completed and confirm tenant satisfaction
            before finalizing payments.
          </span>
        </h3>

        <div className="stepsStatusForm pb-3">
          <h1 className="lgHeading">Select Payment Status:</h1>

          <div className="paymentcheckInputContainer">
            <div className="paymentcheck">
              <input type="checkbox" className="inputCheck" />
              <label className="inputCheckLabel">Paid</label>
            </div>
            <div className="paymentcheck">
              <input type="checkbox" className="inputCheck" />
              <label className="inputCheckLabel">Unpaid</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCase;
