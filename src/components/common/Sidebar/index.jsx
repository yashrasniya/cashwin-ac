import React from "react";
import { useRef } from "react";
import BottomSidebar from "./BottomSidebar";
import "./sidebar.scss";
import TopSidebar from "./TopSidebar";
function Sidebar(props) {
  const { toggleSideBar = () => {} } = props;
  const inputFieldRef = useRef(null);
  return (
    <div className="sidebarDiv" ref={inputFieldRef}>
      <div className="closeArrow">
        <img
          src="/assets/icons/white-close-icon.svg"
          role="button"
          onClick={toggleSideBar}
          alt=""
        />
      </div>
      <div>
        <TopSidebar
          handleBetPlacedSocket={props.handleBetPlacedSocket}
          scrollRef={inputFieldRef}
        />
        <BottomSidebar toggleSideBar={toggleSideBar} />
      </div>
    </div>
  );
}

export default Sidebar;
