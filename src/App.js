import { useState } from "react";
import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Home from "./layout/Home";
import { Routes, Route } from "react-router-dom";
import Wallet from "./components/Wallet";
import Transaction from "./components/Transactions";
import Bridge from "./components/Bridge";
import Swaptoken from "./components/Swaptoken"
import Gastoken from "./components/Gastoken"
import Deposite from "./components/Deposite";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/wallet" element={<Wallet />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/bridge" element={<Bridge />} />
        <Route path="/bridge" element={<Bridge />} />
        <Route path="/swaptoken" element={<Swaptoken />} />
        <Route path="/sastoken" element={<Gastoken />} />
        <Route path="/deposite" element={<Deposite />} />
      </Routes>
      </div>

      
    </>
  );
}

export default App;
