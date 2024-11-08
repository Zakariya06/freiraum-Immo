import React, { useState } from "react";
import CasesTable from "./CasesTable";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import Image from "next/image";
import next from "../public/assets/img/next-icon.svg";
import prev from "../public/assets/img/prev-icon.svg";

const CasesTableTabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <div className="casesTableTabsContainer">
      <div className="cassesTAb">
        <Nav tabs className="casesTabNav">
          <NavItem>
            <NavLink
              className={`casesTabLink ${classnames({
                active: activeTab === "1",
              })}`}
              onClick={() => toggle("1")}
            >
              All Cases
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={`casesTabLink ${classnames({
                active: activeTab === "2",
              })}`}
              onClick={() => toggle("2")}
            >
              Open Cases
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={`casesTabLink ${classnames({
                active: activeTab === "3",
              })}`}
              onClick={() => toggle("3")}
            >
              Closed Cases
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={`casesTabLink ${classnames({
                active: activeTab === "4",
              })}`}
              onClick={() => toggle("4")}
            >
              My Work
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="casesTableContent">
              <CasesTable />
            </div>
          </TabPane>
          <TabPane tabId="2">tab 2nd</TabPane>
          <TabPane tabId="3">tab 3rd</TabPane>
        </TabContent>
      </div>

      <div className="panigation">
        <button className="panigationBtn">
          <Image src={prev} className="paingationBtnImg" />
          Prev
        </button>

        <div className="customSelectWrapper">
          <select className="selectPanigation">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <p className="text">of 77</p>

        <button className="panigationBtn">
          Next
          <Image src={next} className="paingationBtnNextImg" />
        </button>
      </div>
    </div>
  );
};

export default CasesTableTabs;
