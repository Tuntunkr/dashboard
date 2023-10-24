import React from "react";
import "../styles/Transaction.css";
import Tab from "./Tab";

function Transactions() {

  return (
    <>
      <section className="container">
        <div className="main-section">
          {/* Left side  */}
          <div className="left-side-content">
            <h1>Shibarium Bridge</h1>
            <h3>Transfer Overview:</h3>
            <p>The deposit process consists of a single transaction</p>
            <h3>Transfer Time:</h3>
            <p>
              Moving your funds from Ethereum to Polygon take up to 10 - 15
              Minutes
            </p>
            <h3>Transfer Time:</h3>
            <p>
              Copy Delegation/Staking takes place on Ethereum. Do not deposit
              funds to Shibarium for this purpose. <br/> To delegate or stake please
              visit the <span className="bold">Staking UI .</span>
            </p>

            <div className="price-chart">
              <div className="img-content">
                <img
                  src="https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628"
                  alt=""
                />
                <p>Estimation of GAS fee required</p>
              </div>
              <div className="second-price">
                <p>$10.00</p>
              </div>
            </div>
            <div className="btn">
              <div>
                <button>
                  <span>How Shibarium works </span>
                </button>
              </div>
              <div className="btn2">
                <button>
                  <span>FAQs</span>
                </button>
              </div>
            </div>
          </div>
          {/* Right side  */}
          <div className="right-side-sec">
            <Tab />
          </div>
        </div>
      </section>
    </>
  );
}

export default Transactions;
