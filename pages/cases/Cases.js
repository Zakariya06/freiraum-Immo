import React, { useState } from "react";
import DashNavBar from "../../components/DashNavBar";
import SideMenu from "../../components/SideMenu";
import CasesHeader from "../../components/CasesHeader";
import CasesTableTabs from "../../components/CasesTableTabs";
import CasesData from "./CasesData";
import CaseDetails from "./CaseDetails";
import NewCasesSelectAparment from "./NewCasesSelectAparment";
import CasesDetailsPageWrpper from "./CasesDetailsPageWrpper";

const Cases = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [activePage, setActivePage] = useState(false);
  const [showNewCaseSelectApartment, setShowNewCaseSelectApartment] = useState(false);

  const toggleShowNewSelect = () => {
    setShowNewCaseSelectApartment(!showNewCaseSelectApartment)
  }

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <div className="dashBoardPageWrapper casesPageWrapper">
      <DashNavBar toggleSideMenu={toggleSideMenu} />
      <div className="row dashBoardRow">
        <SideMenu showSideMenu={showSideMenu} />
        <div className="col-xl-9 ms-auto  p-0">
          <div className="dashBoardContent">
            {showNewCaseSelectApartment ? (
              <NewCasesSelectAparment
                setShowNewCaseSelectApartment={toggleShowNewSelect}
              />
            ) : (
              <CasesDetailsPageWrpper
                setActivePage={setActivePage}
                setShowNewCaseSelectApartment={toggleShowNewSelect}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
