import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
// import Home2 from './Home2'
import About from "./Squbix/About";
import Career from "./Squbix/Career";
// import Education from './Squbix/Education'
import Contact from "./Squbix/Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cwallet from "./Cwallet";
import Cbanking from "./Cbanking";
import Blog from "./Blog";
import Defisolution from "./Blockchain/Defisolution";
import PrivateBlockChain from "./Blockchain/PrivateBlockChain";
import Hyperledger from "./Blockchain/Hyperledger";
import NFT from "./Blockchain/NFT";
import Ico_Ieo from "./Blockchain/Ico_Ieo";
import Dapps from "./Blockchain/Dapps";
import Smartcontract from "./Blockchain/Smartcontract";
import B_Consulting from "./Blockchain/B_Consulting";
import Margintrading from "./Cryptoex/Margintrading";
import Dex from "./Cryptoex/Dex";
import Dse from "./Cryptoex/Dse";
import Centralise from "./Cryptoex/Centralise";
import Securityexchange from "./Cryptoex/Securityexchange";
import Whitelevel from "./Cryptoex/Whitelevel";
import Education from "./Education";
import AIwallet from "./Wallet/AIwallet";
import Multisign from "./Wallet/Multisign";
import SecuredWallet from "./Wallet/SecuredWallet";
import Webwallet from "./Wallet/Webwallet";
// import Assettoken from './Coindev/Assettoken'
// import Ctdevelopement from './Coindev/Ctdevelopement'
// import Icodevelopement from './Coindev/Icodevelopement'
// import Securitytoken from './Coindev/Securitytoken'
// import Stablecoin from './Coindev/Stablecoin'
// import Whitepaper from './Coindev/Whitepaper'
import DMarketing from "./Services/DMarketing";
import Web from "./Services/Web";
// import Defisolution from './DEFI/Defisolution'
// import Defistacking from './DEFI/Defistacking'
// import Defiwallet from './DEFI/Defiwallet'
// import Defiyield from './DEFI/Defiyield'

import Sidesocial from "./Sidesocial";
import Verify from "./Certificate_Verification/Verify";
import Error from "./Certificate_Verification/Error";

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
        <Route exact path="/certificate/verify/:hash" component={Verify} />
        <Route exact path="/certificate/verify" component={Error} />
      </Switch>
      <Sidesocial />
      <Footer />
    </>
  );
};

export default App;
