import React, { useState } from "react";
import DashNavBar from "../../components/DashNavBar";
import SideMenu from "../../components/SideMenu";
import DashCasesWrok from "../../components/DashCasesWrok";
import DashHeader from "../../components/DashHeader";
import CasesContentWrapper from "../../components/CasesContentWrapper";

const DashBoardPage = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };
  return (
    <div className="dashBoardPageWrapper">
      <DashNavBar toggleSideMenu={toggleSideMenu} />
      <div className="row dashBoardRow">
        <SideMenu showSideMenu={showSideMenu} />
        <div className="col-xl-9 ms-auto  p-0">
          <div className="dashBoardContent">
            <DashHeader />
            <DashCasesWrok />
            <CasesContentWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
