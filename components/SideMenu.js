import React, { useState, useEffect } from "react";
import Image from "next/image";
import homeIcon from "../public/assets/icons/home-icon.svg";
import caseIcon from "../public/assets/icons/case-icon.svg";
import accountingIcon from "../public/assets/icons/accounting-icon.svg";
import notificationIcon from "../public/assets/icons/notification-icon.svg";
import helpIcon from "../public/assets/icons/help-icon.svg";
import settingIcon from "../public/assets/icons/setting-icon.svg";
import logoutIcon from "../public/assets/icons/logout-icon.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const SideMenu = ({ showSideMenu }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("dashboard");

  useEffect(() => {
    // Set initial active link based on current route
    const path = router.pathname;
    if (path.includes("/dashboard")) {
      setActiveLink("dashboard");
    } else if (path.includes("/cases")) {
      setActiveLink("cases");
    } else if (path.includes("/accounting")) {
      setActiveLink("accounting");
    } else if (path.includes("/notifications")) {
      setActiveLink("notification");
    } else if (path.includes("/help")) {
      setActiveLink("help");
    } else if (path.includes("/settings")) {
      setActiveLink("setting");
    }
  }, [router.pathname]);

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="col-lg-3">
      <div className={`sideMenu ${showSideMenu ? "show" : ""}`}>
        <ul className="sideMenuList">
          <li className="sideMenuItem">
            <Link
              href="/dashboard/DashBoard"
              className={`sideMenuLink ${
                activeLink === "dashboard" ? "active" : ""
              }`}
              onClick={() => handleActiveLink("dashboard")}
            >
              <Image
                src={homeIcon}
                alt="home"
                className="sideMenuIcon menuHomeIcon"
              />
              Dashboard
            </Link>
          </li>
          <li className="sideMenuItem">
            <Link
              href="/cases/Cases"
              className={`sideMenuLink ${
                activeLink === "cases" ? "active" : ""
              }`}
              onClick={() => handleActiveLink("cases")}
            >
              <Image src={caseIcon} alt="case" className="sideMenuIcon" />
              Cases
            </Link>
          </li>
          <li className="sideMenuItem">
            <Link
              href="#"
              className={`sideMenuLink ${
                activeLink === "accounting" ? "active" : ""
              }`}
              onClick={() => handleActiveLink("accounting")}
            >
              <Image
                src={accountingIcon}
                alt="accounting"
                className="sideMenuIcon"
              />
              Accounting
            </Link>
          </li>
          <li className="sideMenuItem">
            <Link
              href="#"
              className={`sideMenuLink ${
                activeLink === "notification" ? "active" : ""
              }`}
              onClick={() => handleActiveLink("notification")}
            >
              <Image
                src={notificationIcon}
                alt="notification"
                className="sideMenuIcon"
              />
              Notifications
            </Link>
          </li>
          <li className="sideMenuItem">
            <Link
              href="#"
              className={`sideMenuLink ${
                activeLink === "help" ? "active" : ""
              }`}
              onClick={() => handleActiveLink("help")}
            >
              <Image src={helpIcon} alt="help" className="sideMenuIcon" />
              Help?
            </Link>
          </li>
          <li className="sideMenuItem">
            <Link
              href="#"
              className={`sideMenuLink ${
                activeLink === "setting" ? "active" : ""
              }`}
              onClick={() => handleActiveLink("setting")}
            >
              <Image src={settingIcon} alt="setting" className="sideMenuIcon" />
              Setting
            </Link>
          </li>
        </ul>

        <div className="sideMenuFooter">
          <Link href="/" className="logoutBtnLink">
            <button className="logoutBtn">
              Logout
              <Image src={logoutIcon} alt="logout" className="logoutIcon" />
            </button>
          </Link>
          <h5 className="smHeading">Build 14.2.0</h5>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
