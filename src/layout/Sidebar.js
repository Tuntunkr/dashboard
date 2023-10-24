import React from "react";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/SHIB-Logo.svg"

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <Link to={"/"} className="logo-title">
            <img src={logo}  alt="S" className="logoicons" /> SHIBARIUM
          </Link>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item" id="wallet">
          <Link to="/wallet">
            <BsGrid1X2Fill className="icon" /> Wallet
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="transaction">
            <BsGrid1X2Fill className="icon" /> Transactions
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="bridge">
            <BsFillArchiveFill className="icon" /> Bridge
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="swaptoken">
            <BsFillGrid3X3GapFill className="icon" /> Swap token
          </Link>
        </li>
        <li className="sidebar-list-item" id="faqbottom">
          <Link to="/gastoker">
            <BsPeopleFill className="icon" /> Gas toker
          </Link>
        </li>
        
        <li className="sidebar-list-item">
          <Link to="">
            <BsListCheck className="icon" /> FAQs
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="">
            <BsMenuButtonWideFill className="icon" /> Developer Tools
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="">
            <BsFillGearFill className="icon" /> Support
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
