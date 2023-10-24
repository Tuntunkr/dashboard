import React from "react";
import "../styles/Wallet.css";
import icons from "../assets/Frame (1).svg";

function Wallet() {
  return (
    <>
      <div className="container-box">
        <main className="main-container">
          <div className="wallet-title">
            <h4>My Balance</h4>
          </div>
          <div className="main-cards">
            <div className="cards">
              <h1> 20.000$</h1>
              <p>Shibarium Mainnet</p>
            </div>
            <div className="inners_box">
              <div className="box1">
                <img src={icons} alt="icons" />
                <span>Recived</span>
              </div>
              <br />
              <div className="box1">
                <img src={icons} alt="icons" />
                <span> Send</span>
              </div>
            </div>
            {/* box3 */}
            <div className="box3">
              <div className="input1">
                {" "}
                <span>Move funds from Ethereum to Shibarium</span>
              </div>
              <br />
              <div className="input1">
                <span>How Shibarium works</span>
              </div>
            </div>
          </div>

          <h1 className="title">Assets on Shibarium</h1>

          <div className="maintable">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <div className="text-muted">Name</div>
                  </td>

                  <td>
                    <div className="text-muted">Balance</div>
                  </td>

                  <td>
                    <div className="text-muted">Actions</div>
                  </td>

                  <td></td>

                  <td>
                    <div className="search-box1">
                      <input type="text" placeholder="search" />
                    </div>
                  </td>
                </tr>
                <tr className="line">
                  <td>
                    <div className="d-flex flex-column  ">
                      {/* <div className="text-muted">Name</div> */}
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
                            alt=""
                            className="icons"
                          />
                        </div>
                        <b className="pl-2">Ethereum</b>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex flex-column">
                      {/* <div className="text-muted">Balance</div> */}
                      <div>
                        <b>0.0000 - 0.00$</b>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div>
                        <b>Deposite</b>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <b>Whitdraw</b>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center labels">
                        Send
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            src="https://freepngimg.com/thumb/bitcoin/59526-cryptocurrency-badge-bitcoin-gold-png-file-hd-thumb.png"
                            alt=""
                            className="icons"
                          />
                        </div>
                        <b className="pl-2">Bitcoin cash</b>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div>
                        <b>0.0000 - 0.00$</b>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="text-muted">Deposit</div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center labels"></div>
                      <div>
                        <b>Whitdraw</b>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center labels">
                        <div className="">Send</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            src="https://freepngimg.com/thumb/bitcoin/59549-cryptocurrency-money-bitcoin-gold-cash-free-photo-png-thumb.png"
                            alt=""
                            className="icons"
                          />
                        </div>
                        <b className="pl-2">Ripple</b>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div>
                        <b>0.0000 - 0.00$</b>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="text-muted">Deposit</div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center labels"></div>
                      <div>
                        <b>Whitdraw</b>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center labels">
                        <div className="">Send</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            src="https://freepngimg.com/thumb/bitcoin/59842-cryptocurrency-bitfinex-bitcoin-exchange-png-download-free-thumb.png"
                            alt=""
                            className="icons"
                          />
                        </div>
                        <b className="pl-2">EOS</b>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div>
                        <b>0.0000 - 0.00$</b>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="text-muted">Deposit</div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center labels"></div>
                      <div>
                        <b>Whitdraw</b>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center labels">
                        <div className="">Send</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default Wallet;
