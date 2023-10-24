import React, { useState } from "react";
import "../styles/Tab.css";
import siblogo from "../assets/SHIB-Logo.svg"

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
      <ul className="tabs">
        <li
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          Deposite
        </li>
        <li
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          Withdraw
        </li>
      </ul>

      <div className="tab_content">
        {activeTab === 1 && (
          <div className="tab_panel">
            <h1>From</h1>
            <div className="price-box">
              <div className="etherium">
                <img
                  src="https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628"
                  alt="icons"
                />
                <p>Ethereum chain</p>
              </div>

              <div>
              <p>
                Balance: <span className="boldss">100.00ETH</span>
              </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="tab_panel">
            {" "}
            <h1>Withdraw</h1>
            <div className="price-box">
              <div className="etherium">
                <img
                  src="https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628"
                  alt="icons"
                />
                <p>Ethereum chain</p>
              </div>

              <p>
                Balance: <span className="boldss">100.00ETH</span>
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Select price */}
      <div className="select-price">
        <div className="inner selectnew">
          <select id="cars" name="cars">
            <option value="volvo">ETH</option>
            <option value="saab">Saab 95</option>
            <option value="mercedes">Mercedes SLK</option>
            <option value="audi">Audi TT</option>
          </select>
          <div className="price-box">
            <div className="etherium">0.00</div>

            <div>
              <p>MAX</p>
            </div>
          </div>
        </div>
        <h1 className="title-to">To</h1>
        <div className="price-box">
          <div className="etherium">
            <img
              src={siblogo}
              alt="icons"
            />
            <p>Ethereum chain</p>
          </div>

          <div>
            <p>Balance: 100.00ETH</p>
          </div>

        </div>
      </div>
         
            <div className="price-boxs">
        
          <div className="trasn">
          <button type="submit"  >Transfer</button>
          </div>

        </div>
    </div>
  );
};

export default Tab;
