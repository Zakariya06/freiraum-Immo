import React from "react";
import electricalIcon from "../public/assets/img/electrical-icon.svg";
import craftsmanCloseIcon from "../public/assets/img/craftsman-close-icon.svg";
import Image from "next/image";

const CarftManCard = ({
  image,
  name,
  id,
  service,
  license,
  availability,
  cost,
  contact,
  status,
  statusIcon,
  statusBtnBg,
}) => {
  return (
    <div className="col-lg-4">
      <div className="craftsmanCard">
        <Image
          src={craftsmanCloseIcon}
          alt="craftsman"
          className="craftsmanCloseIcon"
        />
        <div className="craftCardContent">
          <div className="craftsmanCardHeader">
            <Image src={image} alt="craftsman" className="craftsmanImage" />
            <div className="cardNameStatus">
              <h3 className="mdHeading">
                Name:<span> {name}</span>
              </h3>
              <h5 className="mdHeading">
                ID:{" "}
                <a href="#" className="mdLink">
                  {id}
                </a>
              </h5>
            </div>
          </div>
          <div className="craftsmanCardBody">
            <a href="#" className="argentBtn appovalBtn">
              {" "}
              <Image
                src={electricalIcon}
                alt="electrical"
                className="electricalIcon"
              />{" "}
              {service}
            </a>
            <h5 className="mdHeading">
              License and Certifications: <span>{license}</span>
            </h5>
            <h5 className="mdHeading">
              Availability: <span>{availability}</span>
            </h5>
            <h5 className="mdHeading">
              Estimated Cost: <span>{cost}</span>
            </h5>
            <h5 className="mdHeading">
              Contact:
              <a href="#" className="mdLink">
                {contact}
              </a>
            </h5>
          </div>
        </div>
        <button className={`carftManCardBtn ${statusBtnBg}`}>
          <Image src={statusIcon} alt="check" className="checkIcon" />
          {status}
        </button>
      </div>
    </div>
  );
};

export default CarftManCard;
