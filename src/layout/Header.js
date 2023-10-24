import React from "react";

import "./Header.css";
import metamask from "../assets/MetaMask_Fox 2.svg";
import Frame from "../assets/Frame.svg";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="frame">
        <img className="img" alt="Frame" src={Frame} />
        <div className="text-wrapper">Apps</div>
      </div>
      <div className="header-right">
        <div className="frames">
          <div className="MM-account">
            <div className="metamask-fox-wrapper">
              <img className="metamask-fox" alt="Metamask fox" src={metamask} />
            </div>
            <div className="text-wrapper">0x21A...48A5 
            <div id="dialog2" class="triangle_down1"></div></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
