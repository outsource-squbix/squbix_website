import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import $ from "jquery";

const Navbar = () => {
  return (
    <>
      <nav class="topnav navbar-expand-lg" id="tp_nav">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav" id="nav_top">
            <a id="nav_top2" class="nav-item nav-link">
              <span>
                <img
                  style={{ marginRight: "5px" }}
                  class="nav_img"
                  src="/images/singapore.png"
                  alt="singapore"
                />
              </span>{" "}
              SINGAPORE{" "}
              <span style={{ marginLeft: "10px", marginRight: "15px" }}>|</span>
              <span>
                <img
                  style={{ marginRight: "5px" }}
                  class="nav_img"
                  src="/images/india.png"
                  alt="singapore"
                />
              </span>{" "}
              BENGALURU | BHUBANESWAR
            </a>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg">
        <div className="row">
          <NavLink class="navbar-brand" to="/">
            <img className="img_logo" src="/images/squbi_logo.png" alt="logo" />
          </NavLink>
          {/* <NavLink to="/">
            <div className="navbar-text">
              <div className="col">
                <h1 className="logo_text_main">SQUBIX DIGITAL</h1>
              </div>
              <div className="col">
                <small className="logo_text">
                  A SWNGlobal Blockchain Service
                </small>
              </div>
            </div>
          </NavLink> */}
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li className="nav-item dropdown active">
              <NavLink
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to="/"
              >
                SQUBIX
              </NavLink>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  className="dropdown-item"
                  to="/about"
                >
                  About
                </NavLink>
                {/* <NavLink className="dropdown-item" to='/education'>Training And Education</NavLink> */}
                <NavLink
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  className="dropdown-item"
                  to="/career"
                >
                  Career
                </NavLink>
                <NavLink
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  className="dropdown-item"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </div>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to="/"
              >
                BLOCKCHAIN
              </NavLink>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* <NavLink className="dropdown-item" to='/Blockchain/polkadot'>Polkadot</NavLink>
        <NavLink className="dropdown-item" to='/Blockchain/hyperledger'>Hyperledger</NavLink>
			  <NavLink className="dropdown-item" to='/Blockchain/ethereum'>Ethereum</NavLink>
			  <NavLink className="dropdown-item" to='/Blockchain/corda'>R3 Corda</NavLink> */}
                {/* <NavLink className="dropdown-item" to='/Blockchain/pvt_b_chain'>Private Blockchain</NavLink> */}

                <NavLink
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  className="dropdown-item"
                  to="/ico_ieo"
                >
                  ICO, IEO
                </NavLink>
                <NavLink
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  className="dropdown-item"
                  to="/smartcontract"
                >
                  Smart Contract Developement
                </NavLink>
                {/* <NavLink className="dropdown-item" to='/defi'>Defi solution</NavLink> */}
                <NavLink
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  className="dropdown-item"
                  to="/nft"
                >
                  NFT / DeFI
                </NavLink>
                <NavLink
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  className="dropdown-item"
                  to="/dapps"
                >
                  dApps Development
                </NavLink>
                {/* <NavLink className="dropdown-item" to='/b_consulting'> Blockchain Consulting</NavLink> */}
              </div>
            </li>

            <li className="nav-item">
              <NavLink
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                className="nav-link"
                to="/crypto_wallet"
              >
                DIGITAL WALLET
              </NavLink>
            </li>

            {/* <li className="nav-item dropdown">

<NavLink class="nav-link dropdown-toggle" id="navbarDropdown"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  to='/'>DIGITAL WALLET</NavLink>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item" to='/Wallet/securedwallet'>Secured digital Wallets</NavLink>
            <NavLink className="dropdown-item" to='/Wallet/multisign'>Multi Sign wallet</NavLink>
            <NavLink className="dropdown-item" to='/Wallet/aiwallet'>AI and Biomatric wallet</NavLink>
            <NavLink className="dropdown-item" to='/Wallet/webwallet'>Web wallets and Plugins</NavLink> 
        </div>
</li> */}

            <li className="nav-item dropdown">
              <NavLink
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to="/"
              >
                DIGITAL EXCHANGE
              </NavLink>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* <NavLink className="dropdown-item" to='/Cryptoex/securityexchange'>Security Exchange Developement</NavLink>
			  <NavLink className="dropdown-item" to='/Cryptoex/whitelevel'>White Level Exchange</NavLink>
              <NavLink className="dropdown-item" to='/Cryptoex/margintrading'>Margin Trading Exchange</NavLink> */}
                <NavLink
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  className="dropdown-item"
                  to="/dex"
                >
                  DEX / CE
                </NavLink>
                <NavLink
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  className="dropdown-item"
                  to="/dse"
                >
                  DSE - Digital Stock Exchange
                </NavLink>
                {/* <NavLink className="dropdown-item" to='/centralise'>Centralise Exchange</NavLink> */}
              </div>
            </li>

            {/* <li className="nav-item dropdown">

<NavLink class="nav-link dropdown-toggle" id="navbarDropdown" 
role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
to='/'>COIN DEVELOPEMENT</NavLink>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
<NavLink className="dropdown-item" to='/Coindev/ctdevelopement'>Coin/Token Developement</NavLink>
			  <NavLink className="dropdown-item" to='/Coindev/stablecoin'>Stable Coin Developement</NavLink>
			  <NavLink className="dropdown-item" to='/Coindev/securitytoken'>Security Token Developement</NavLink>
              <NavLink className="dropdown-item" to='/Coindev/assettoken'>Asset Tokenization</NavLink>
			  <NavLink className="dropdown-item" to='/Coindev/whitepaper'>White Paper Developement</NavLink>
              <NavLink className="dropdown-item" to='/Coindev/icodevelopement'>ICO Developement</NavLink>
        </div>
</li> */}

            {/* <li className="nav-item dropdown">

<NavLink class="nav-link dropdown-toggle" id="navbarDropdown" 
role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
to='/'>DEFI</NavLink>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
<NavLink className="dropdown-item" to='/DEFI/defisolution'>DEFI Solutions</NavLink>
			  <NavLink className="dropdown-item" to='/DEFI/defiwallet'>DEFI Wallet Developement</NavLink>
			  <NavLink className="dropdown-item" to='/DEFI/defistacking'>DEFI Stacking Platform</NavLink>
              <NavLink className="dropdown-item" to='/DEFI/defiyield'>DEFI Yield Farming Developement</NavLink>
        </div>
</li> */}

            <li className="nav-item dropdown">
              <NavLink
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to="/"
              >
                OTHER SERVICES
              </NavLink>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  className="dropdown-item"
                  to="/web_mobile_development"
                >
                  WEB & Mobile Development
                </NavLink>
                <NavLink
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  className="dropdown-item"
                  to="/digital_marketing"
                >
                  Digital Marketing
                </NavLink>
              </div>
            </li>

            <li className="nav-item">
              <NavLink
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                className="nav-link"
                to="/education"
              >
                TRAINING & EDUCATION
              </NavLink>
            </li>
            {/* <li className="nav-item"><NavLink className="nav-link" to='/blog'>BLOG</NavLink></li> */}
            <li className="nav-item">
              <NavLink
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                to="/contact"
              >
                <button className="btn_cnt">CONTACT</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <br />
    </>
  );
};
export default Navbar;
