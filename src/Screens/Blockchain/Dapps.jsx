import React from 'react'
import {NavLink} from 'react-router-dom'

const Dapps = () =>{
    return(
        <>
        <div className="container" style={{marginTop:'150px'}} id="polkadot">
          <img className="img_polka" src="../images/dapp.png" alt=""/>

          <p className="text-center" style={{marginTop:'50px'}} id="d_apps">
          DApps or decentralized applications, are open-source applications that are used to interact with 
          smart contracts (ex. tokens) that run on a peer-to-peer network of servers. These applications can 
          be based on a variety of blockchain platforms such as Ethereum, EOS, Hyperledger, Polkadot, and others.
          </p>

          <NavLink to="/Squbix/contact"><button className="btn_cont" style={{marginTop:'50px'}}>CONTACT</button></NavLink>
       </div>

       
       <div className="container my-5" style={{background:'#f9f9f9'}}>
<h3 className="text-center">Features of dApps Development</h3>
<hr/>
<div className="row">
<div className="col-md-6 my-2">
<div class="card h-100" id="card_pvt">
 {/* <div className="card_img2" > */}
{/* <img className="card_img2" src="../images/icons/ic10.png" alt="img"/> */}
{/* </div> */}
<div class="card-body">
<h5 class="card-title">Transparency</h5>
<p class="card-text">DApp data is stored on a public ledger which immutable and records everything in a secure and transparent way. </p>
</div>
</div>
</div>
<div className="col-md-6 my-2">
<div class="card h-100" id="card_pvt">
{/* <div className="card_img2" > */}
{/* <img className="card_img2" src="../images/icons/ic11.png" alt="img"/> */}
{/* </div> */}
<div class="card-body">
<h5 class="card-title">Open Source </h5>
<p class="card-text">Being open-source, dApps’ code is open for review. This allows the whole ecosystem to be more flexible, to progress faster and to be developed more securely.</p>
</div>
</div>
</div>

<div className="col-md-6 my-2">
<div class="card h-100" id="card_pvt">
{/* <div className="card_img2" > */}
{/* <img className="card_img2" src="../images/icons/ic12.png" alt="img"/> */}
{/* </div> */}
<div class="card-body">
<h5 class="card-title">Incentivization </h5>
<p class="card-text">DApps have an incentivization mechanism in the form of tokens or digital assets. Tokens are used to incentivize validators of the blockchain or as “bug bounties”.</p>
</div>
</div>
</div>
<div className="col-md-6 my-2">
<div class="card card h-100" id="card_pvt">
 {/* <div className="card_img2" > */}
{/* <img className="card_img2" src="../images/icons/ic13.png" alt="img"/> */}
{/* </div> */}
<div class="card-body">
<h5 class="card-title">Automation </h5>
<p class="card-text">dApps can be executed by self executing contracts written in code that provide automation.</p>
</div>
</div>
</div>

</div>
</div>



<div className="container my-5" style={{background:'#f9f9f9'}}>
<h3 className="text-center">Process Of dApps Development</h3>
<hr/>
<div className="row">
<div className="col-md-4 my-2">
<div class="card h-100" id="card_pvt">
 {/* <div className="card_img2" > */}
{/* <img className="card_img2" src="../images/icons/ic10.png" alt="img"/> */}
{/* </div> */}
<div class="card-body">
<h5 class="card-title">Business Use Case</h5>
<p class="card-text">Determine the right business use case. An appropriate way, to begin with, is to outline the problem and assess if a decentralized app can address it. </p>
</div>
</div>
</div>
<div className="col-md-4 my-2">
<div class="card h-100" id="card_pvt">
{/* <div className="card_img2" > */}
{/* <img className="card_img2" src="../images/icons/ic11.png" alt="img"/> */}
{/* </div> */}
<div class="card-body">
<h5 class="card-title">Design Arcitecture</h5>
<p class="card-text">Design of frontend, back end, smart contracts, storage, and blockchain integration</p>
</div>
</div>
</div>

<div className="col-md-4 my-2">
<div class="card h-100" id="card_pvt">
{/* <div className="card_img2" > */}
{/* <img className="card_img2" src="../images/icons/ic12.png" alt="img"/> */}
{/* </div> */}
<div class="card-body">
<h5 class="card-title">Smart Contract Creation</h5>
<p class="card-text">creation of smart contracts which will connect the dApp to the blockchain and execute the business logic and functionality of the app.</p>
</div>
</div>
</div>
<div className="col-md-4 my-2">
<div class="card card h-100" id="card_pvt">
 {/* <div className="card_img2" > */}
{/* <img className="card_img2" src="../images/icons/ic13.png" alt="img"/> */}
{/* </div> */}
<div class="card-body">
<h5 class="card-title">UI / UX Development</h5>
<p class="card-text">Responsive frontend and excellent user experience finalised, The frontend can be created in any programming language that can make API calls to the backend.</p>
</div>
</div>
</div>
<div className="col-md-4 my-2">
<div class="card h-100" id="card_pvt">
{/* <div className="card_img2" > */}
{/* <img className="card_img2" src="../images/icons/ic14.png" alt="img"/> */}
{/* </div> */}
<div class="card-body">

<h5 class="card-title">Test net deployment </h5>
<p class="card-text">in this step the dApp is deployed in a test net. The test net deployment allows developers and clients to test the dApp at no cost, and to evaluate if the dApp works as planned.</p>
</div>
</div>
</div>

<div className="col-md-4 my-2">
<div class="card h-100" id="card_pvt">
{/* <div className="card_img2" > */}
{/* <img className="card_img2" src="../images/icons/ic15.png" alt="img"/> */}
{/* </div> */}
<div class="card-body">
<h5 class="card-title">Final deployment </h5>
<p class="card-text">The dApp is deployed which will function and becomes available to users.</p>
</div>
</div>
</div>
</div>
</div>

        </>
    )
}
export default Dapps;