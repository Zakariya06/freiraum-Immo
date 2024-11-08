import React from "react";
import Image from "next/image";
import logo from "../public/assets/img/logo-2.png";
import bell from "../public/assets/img/notification-bill.png";
import user from "../public/assets/img/profile.png";
import { RxHamburgerMenu } from "react-icons/rx";

const DashNavBar = ({ toggleSideMenu }) => {
  return (
    <div className="dashBoardNavbar">
      <a href="#" className="brandLogo">
        <Image src={logo} alt="logo" className="brandLogg" />
      </a>

      <div className="navMenu">
        <a href="#" className="menuItem notification">
          <Image src={bell} alt="bell" className="menuIcon" />
          <span className="notificationCount"></span>
        </a>
        <div className="profileContainer">
          <a href="#" className="profile">
            <Image src={user} alt="user" className="menuIcon" />
            <span className="notificationCount"></span>
          </a>

          <div className="profileName">
            <h1 className="mdHeading">Emma Sekiro</h1>
            <p className="smHeading">#UID - 244567</p>
          </div>
        </div>
        <RxHamburgerMenu onClick={toggleSideMenu} className="hamburgerMenu" />
      </div>
    </div>
  );
};

export default DashNavBar;
