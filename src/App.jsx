import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Screens/Home";
// import Home2 from './Home2'
import About from "./Screens/Squbix/About";
import Career from "./Screens/Squbix/Career";
// import Education from './Squbix/Education'
import Contact from "./Screens/Squbix/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Cwallet from "./Screens/Cwallet";
import Cbanking from "./Screens/Cbanking";
import Blog from "./Screens/Blog";
import Defisolution from "./Screens/Blockchain/Defisolution";
import PrivateBlockChain from "./Screens/Blockchain/PrivateBlockChain";
import Hyperledger from "./Screens/Blockchain/Hyperledger";
import NFT from "./Screens/Blockchain/NFT";
import Ico_Ieo from "./Screens/Blockchain/Ico_Ieo";
import Dapps from "./Screens/Blockchain/Dapps";
import Smartcontract from "./Screens/Blockchain/Smartcontract";
import B_Consulting from "./Screens/Blockchain/B_Consulting";
import Margintrading from "./Screens/Cryptoex/Margintrading";
import Dex from "./Screens/Cryptoex/Dex";
import Dse from "./Screens/Cryptoex/Dse";
import Centralise from "./Screens/Cryptoex/Centralise";
import Securityexchange from "./Screens/Cryptoex/Securityexchange";
import Whitelevel from "./Screens/Cryptoex/Whitelevel";
import Education from "./Screens/Education";
import AIwallet from "./Screens/Wallet/AIwallet";
import Multisign from "./Screens/Wallet/Multisign";
import SecuredWallet from "./Screens/Wallet/SecuredWallet";
import Webwallet from "./Screens/Wallet/Webwallet";
// import Assettoken from './Coindev/Assettoken'
// import Ctdevelopement from './Coindev/Ctdevelopement'
// import Icodevelopement from './Coindev/Icodevelopement'
// import Securitytoken from './Coindev/Securitytoken'
// import Stablecoin from './Coindev/Stablecoin'
// import Whitepaper from './Coindev/Whitepaper'
import DMarketing from "./Screens/Services/DMarketing";
import Web from "./Screens/Services/Web";
// import Defisolution from './DEFI/Defisolution'
// import Defistacking from './DEFI/Defistacking'
// import Defiwallet from './DEFI/Defiwallet'
// import Defiyield from './DEFI/Defiyield'

import Sidesocial from "./Components/Sidesocial";
import Verify from "./Screens/Certificate_Verification/Verify";
import Error from "./Screens/Certificate_Verification/Error";
import Page_404 from "./Screens/Page404/Page_404";
import ErrorException from "./Screens/EmployeeDetails/ErrorException";
import Details from "./Screens/EmployeeDetails/Details";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path='/' component={Home2}/> */}
        <Route path="/about" component={About} />
        <Route path="/career" component={Career} />
        <Route path="/contact" component={Contact} />
        {/* <Route path='/education' component={Education}/> */}
        <Route path="/education" component={Education} />
        <Route path="/crypto_wallet" component={Cwallet} />
        <Route path="/crypto_banking" component={Cbanking} />
        <Route path="/blog" component={Blog} />
        <Route path="/defi" component={Defisolution} />
        <Route path="/pvt_b_chain" component={PrivateBlockChain} />
        <Route path="/hyperledger" component={Hyperledger} />
        <Route path="/nft" component={NFT} />
        <Route path="/ico_ieo" component={Ico_Ieo} />
        <Route path="/dapps" component={Dapps} />
        <Route path="/smartcontract" component={Smartcontract} />
        <Route path="/b_consulting" component={B_Consulting} />
        <Route path="/margintrading" component={Margintrading} />
        <Route path="/securityexchange" component={Securityexchange} />
        <Route path="/whitelevel" component={Whitelevel} />
        <Route path="/dex" component={Dex} />
        <Route path="/dse" component={Dse} />
        <Route path="/centralise" component={Centralise} />
        <Route path="/aiwallet" component={AIwallet} />
        <Route path="/multisign" component={Multisign} />
        <Route path="/securedwallet" component={SecuredWallet} />
        <Route path="/webwallet" component={Webwallet} />
        <Route path="/digital_marketing" component={DMarketing} />
        <Route path="/web_mobile_development" component={Web} />
        {/* <Route path='/Coindev/assettoken' component={Assettoken}/>
      <Route path='/Coindev/ctdevelopement' component={Ctdevelopement}/>
      <Route path='/Coindev/icodevelopement' component={Icodevelopement}/>
      <Route path='/Coindev/securitytoken' component={Securitytoken}/>
      <Route path='/Coindev/stablecoin' component={Stablecoin}/>
      <Route path='/Coindev/whitepaper' component={Whitepaper}/> */}

        {/* <Route path='/DEFI/defisolution' component={Defisolution}/>
      <Route path='/DEFI/defistacking' component={Defistacking}/>
      <Route path='/DEFI/defiwallet' component={Defiwallet}/>
      <Route path='/DEFI/defiyield' component={Defiyield}/> */}
        <Route path="/certificate/verify/:hash" component={Verify} />
        <Route path="/certificate/verify" component={Error} />
        <Route path="/employee/details/:hash" component={Details} />
        <Route path="/employee/details" component={ErrorException} />

        <Route component={Page_404} />
      </Switch>
      <Sidesocial />
      <Footer />
    </>
  );
};

export default App;
