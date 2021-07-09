import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import Hcard from './Hcard'
import Hdata from './Hdata'
import shine from './Video/shine.gif'

const Home = () => {
   
    return (
        <>
        <img style={{
  height:'100%',
  width: '100%',
  position: 'absolute',
  objectFit:'cover',
  // zIndex: '-1'
}} src={shine} alt="" />

{/* 
<video autoPlay={true} muted={true} loop={true}
style={{
  height:'100%',
  width: '100%',
  position: 'absolute',
  objectFit:'cover',
  // zIndex: '-1'
}}
>
  <source src={shine} type="video/gif" />
  Your browser does not support HTML5 video.
</video> */}


<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active my-3">
      {/* <img class="d-block w-100" src="..." alt="First slide"/> */}
      <div class="carousel-caption d-md-block ">
      <h1>Products | Solutions | Services</h1>
              <p>Expertise in Digital transferamation Strategy, User Experience Design, Software Development, 
                Testing Automation and Training, we solve business and user problems for our customers.</p>
                                    <strong>#FunctionalProgramming, #Rust, #Javascript, #Haskell, #React, #Swift, #Kotlin</strong>
              <br/><br/>


             
              <p><NavLink class="btn btn-lg" role="button" to='/Squbix/about'><button className="btn_pvt">LEARN MORE
</button></NavLink></p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
      <div class="carousel-caption d-md-block ">
      <h1>Blockchain Consultant</h1>
              <p>A creative innovation consultancy, product development and research lab, specialised in 
                Blockchain and AI Solutions with an experience of more than 5 years having global presence in 
                Singapore & India.</p>
                <strong>#Ethereum, #Bitcoin, #Hyperledger, #Corda, #Polkadot</strong>
                <br/><br/>
              <p>
              <NavLink class="btn btn-lg" role="button" to='/Squbix/contact'><button className="btn_pvt">CONTACT
</button></NavLink>
                </p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
      <div class="carousel-caption d-md-block ">
      <h1>Training & Education</h1>
              <p>We provide industry standard training on BLOCKCHAIN and AI. Also get a chance to learn development of 
               real-world products such as wallet, coin, exchange platform, applications under the guidance of our 
               highly experienced developers. 
              </p> 
              <p><NavLink class="btn btn-lg" role="button" to='/education'><button className="btn_pvt">LEARN MORE
</button></NavLink></p>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<br /><br /><br />

  
                    
  <div className="container">
  <div class="row">
    <div className="col-md-4 my-2">
    <div class="card h-100" id="card_home">
      <h4 class="text-center">Blockchain Solution</h4>
      <p class="text-center">Our team is best at researching on businesses which gives us clear view of business requirements, our expert team helps our clients to quickly adapt new technologies.</p>
    </div>
    </div>
    <div className="col-md-4 my-2">
    <div class="card h-100" id="card_home">
      <h4 class="text-center">AI Research Lab</h4>
      <p class="text-center">Artificial intelligence is continuously evolving and propagating across every industry. With much of the groundbreaking innovations moving the industry forward, the technology is continuously making headlines every day.</p>
    </div>
    </div>
    <div className="col-md-4 my-2">
    <div class="card h-100" id="card_home">
      <h4 class="text-center">Education & Training</h4>
      <p class="text-center">Professional Blockchain  Training and certification designed for all, includes world class instructions, outcome-centric bootcamps, and hands-on projects. Our Blockchain Courses will give you experince in real-world blockchain applications.</p>
    </div>
    </div>

  </div>
  </div>

<br/><br/>

                        <div className="container">
                            <div className="row">

                                <div className="col-md-6" id="hm2_txt" >
                              
                                    <h3>Shift To BLOCKCHAIN Revolution</h3>

                                    <p className="hm_txtt">
                                    <strong>Distributed Ledger : </strong>Trusted, efficient and immutable way 
                                    to share copy of all transactions with every participant in the blockchain 
                                    network. <br/>
                                    <strong>Consensus Algorithm : </strong>Every transaction is validated and inserted 
                                    into the shared ledgers as per the common rule called Consensus. Some Popular 
                                    Consensus protocol are Proof of work, Proof of stake, Proof of Authority. <br/>
                                    <strong>Smart Contracts/Transactions : </strong>Every transaction is 
                                    excuted based on certain rules or busines logic as per the program 
                                    code written in smart contracts. <br/>
                                    </p>
                          
                                    <p>We in SQUBIX believe that the growth of a business directly / indirectly 
                                      depends on adaptation of new technologies. And its been 5 years we are 
                                      helping businesses to grow by adapting technologies in this technology 
                                      driven world. We create an innovative way to help businesses transit 
                                      themselves from conventional technology to blockchain technology by 
                                      rigorously researching and developing our team in SQUBIX. We have 5 
                                      years of real-world experience providing block chain, digital banking, 
                                      digital wallet and crypto currency related solutions to industries.</p>
                                    
                                  
                                </div>

                                <div className="col-md-6">
                                   <img className="imghmm" src="images/001.png" />
                                </div>
                            </div>
                            
                        </div>

                        

                        {/* <div className="container my-5">
                            <h2 className="text-center my-1">BlockChain Offerings</h2>
                            <p className="text-center">Enterprise blockchain services to build a better future.</p>
<div className="row">
{
    Hdata.map((val, ind)=>{
        return <Hcard
        text={val.text}
        title={val.title}
        img={val.img}
        link={val.link}
        />
    })
    }
    
</div>
</div> */}




<div class="container">
<h2 className="text-center my-1">BlockChain Offerings</h2>
<p className="text-center">Enterprise blockchain services to build a better future.</p>
	<div class="row">
	
		<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab  item">
    <NavLink style={{textDecoration:'none'}} to='/Cryptoex/dse'>
    <div class="folded-corner service_tab_1 h-100">
				<div class="text">
          <img className="card_img2" src="../images/icons/ic15.png" alt="img"/>
					{/* <i class="fa fa-image fa-5x fa-icon-image"></i> */}
						<p class="item-title">
								<h5 className="text-center">White Label Exchange Development</h5>
							</p>
					<p className="text-center">
					Contact us for white label exchange platform development.
					</p>
				</div>
			</div>
    </NavLink>

	    </div>
		<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
      <NavLink style={{textDecoration:'none'}} to='/Cryptoex/dex'>
      <div class="folded-corner service_tab_1 h-100">
				<div class="text">
          <img className="card_img2" src="../images/icons/ic10.png" alt="img"/>
					{/* <i class="fa fa-lightbulb-o fa-5x fa-icon-image" ></i> */}
						<p class="item-title">
							<h5 className="text-center">Decentralise/Centralise Exchange Development</h5>
						</p>
						<p className="text-center">
						We provide Decentralise/Centralise Exchange Development services.
					</p>
				</div>
			</div>
      </NavLink>

		</div>
		<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
      <NavLink style={{textDecoration:'none'}} to='/Blockchain/pvt_b_chain'>
      <div class="folded-corner service_tab_1 h-100">
				<div class="text">
          <img className="card_img2" src="../images/icons/ic49.png" alt="img"/>
					{/* <i class="fa fa-truck fa-5x fa-icon-image"></i> */}
						<p class="item-title">
							<h5 className="text-center">Private Blockchain</h5>
						</p>
					<p className="text-center">
					We provide private blockchains development services
					</p>
				</div>
			</div>
      </NavLink>

		</div>
		<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
      <NavLink style={{textDecoration:'none'}} to='/crypto_wallet'>
      <div class="folded-corner service_tab_1 h-100">
				<div class="text">
          <img className="card_img2" src="../images/icons/ic28.png" alt="img"/>
					{/* <i class="fa fa-diamond fa-5x fa-icon-image"></i> */}
						<p class="item-title">
							<h5 className="text-center">Wallet Developement</h5>
						</p>
					<p className="text-center">
					We provide digital wallet development services with excellent security features. 
					</p>
				</div>
			</div>
      </NavLink>

		</div>
		<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
      <NavLink style={{textDecoration:'none'}} to='/Blockchain/smartcontract'>
      <div class="folded-corner service_tab_1 h-100">
			<div class="text">
        <img className="card_img2" src="../images/smartcon2.png" alt="img"/>
				{/* <i class="fa fa-line-chart fa-5x fa-icon-image"></i> */}
					<p class="item-title">
						<h5 className="text-center">Smart Contract Developement</h5>
					</p>
					<p className="text-center">
					Smart contract is a computer programmed contract that only executes when predefined conditions satisfied.
					</p>
				</div>
			</div>
      </NavLink>

		</div>
		<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
      <NavLink style={{textDecoration:'none'}} to='/Blockchain/nft'>
      <div class="folded-corner service_tab_1 h-100">
				<div class="text">
          <img className="card_img2" src="../images/icons/ic50.png" alt="img"/>
					{/* <i class="fa fa-mobile fa-5x fa-icon-image"></i> */}
						<p class="item-title">
							<h5 className="text-center">NFT Development</h5>
						</p>
					<p className="text-center">
					We provide Non Fungible Token deveopement services.
					</p>
				</div>
			</div>
      </NavLink>

		</div>
		<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
      <NavLink style={{textDecoration:'none'}} to='/Blockchain/dapps'>
      <div class="folded-corner service_tab_1 h-100">
					<div class="text">
            <img className="card_img2" src="../images/icons/ic51.png" alt="img"/>
						{/* <i class="fa fa-money fa-5x fa-icon-image"></i> */}
							<p class="item-title">
								<h5 className="text-center">dApps Development</h5>
							</p>
						<p className="text-center">
            We develope dApps with excellent market leading features. 
						</p>
				</div>
			</div>
      </NavLink>

		</div>
		<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
      <NavLink style={{textDecoration:'none'}} to='/education'>
      <div class="folded-corner service_tab_1 h-100">
				<div class="text">
          <img className="card_img2" src="../images/icons/ic52.png" alt="img"/>
					{/* <i class="fa fa-bullhorn fa-5x fa-icon-image"></i> */}
						<p class="item-title">
							<h5 className="text-center">Training & Education</h5>
						</p>
					<p className="text-center">
          We provide industry standard training on BLOCKCHAIN and AI.
					</p>
				</div>
			</div>
      </NavLink>

		</div>
	  
	</div>
</div>

<div className="container my-5" style={{background:'#f9f9f9'}}>
<h3 className="text-center">BLOCKCHAIN Use Cases</h3>
<hr/>
<div className="row" id="hm_cards">
    <div className="col-md-3 my-2">
<div class="card h-100">
  <img class="card-img-top" src="../images/icons/ic41.png" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text text-center" id="card_text">Games</p>
  </div>
</div>
    </div>
   
    <div className="col-md-3 my-2">
<div class="card h-100">
  <img class="card-img-top" src="../images/icons/ic40.png" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text text-center" id="card_text">Loans</p>
  </div>
</div>
    </div>

    <div className="col-md-3 my-2">
<div class="card h-100">
  <img class="card-img-top" src="../images/icons/ic39.png" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text text-center" id="card_text">Digital Contents</p>
  </div>
</div>
    </div>

    <div className="col-md-3 my-2">
<div class="card h-100">
  <img class="card-img-top" src="../images/icons/ic38.png" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text text-center" id="card_text">Investments & Collaterals</p>
  </div>
</div>
    </div>

    <div className="col-md-3 my-2">
<div class="card h-100">
  <img class="card-img-top" src="../images/icons/ic37.png" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text text-center" id="card_text">Domain Names</p>
  </div>
</div>
    </div>

    <div className="col-md-3 my-2">
<div class="card h-100">
  <img class="card-img-top" src="../images/icons/ic36.png" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text text-center" id="card_text">Real-Estate</p>
  </div>
</div>
    </div>

    <div className="col-md-3 my-2">
<div class="card h-100">
  <img class="card-img-top" src="../images/icons/ic34.png" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text text-center" id="card_text">Arts</p>
  </div>
</div>
    </div>

    <div className="col-md-3 my-2">
<div class="card h-100">
  <img class="card-img-top" src="../images/icons/ic35.png" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text text-center" id="card_text">Music</p>
  </div>
</div>
    </div>

 

</div>
</div>


<div className="container my-5">
<h3 className="text-center">Our Tech Expertise</h3>
<hr/>
<div className="row" id="hm_cards2">
    <div className="col-md-4 my-1 px-1">
<div class="card h-100">
  <img class="card-img-top" src="../images/hyperledger2.png" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text text-center" id="card_text">Hyperledger</p>
  </div>
</div>
    </div>
   
    <div className="col-md-4 my-1 px-1">
<div class="card h-100">
  <img class="card-img-top" src="../images/ethereum.png" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text text-center" id="card_text">Ethereum</p>
  </div>
</div>
    </div>

    <div className="col-md-4 my-1 px-1">
<div class="card h-100">
  <img class="card-img-top" src="../images/corda2.png" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text text-center" id="card_text">Corda</p>
  </div>
</div>
    </div>

    <div className="col-md-4 my-1 px-1">
<div class="card h-100">
  <img class="card-img-top" src="../images/btc.png" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text text-center" id="card_text">Bitcoin</p>
  </div>
</div>
    </div>

    <div className="col-md-4 my-1 px-1">
<div class="card h-100">
  <img class="card-img-top" src="../images/polka.png" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text text-center" id="card_text">Polkadot</p>
  </div>
</div>
    </div>

    <div className="col-md-4 my-1 px-1">
<div class="card h-100">
  <img class="card-img-top" src="../images/eos.png" alt="Card image cap" />
  <div class="card-body">
    <p class="card-text text-center" id="card_text">EOS</p>
  </div>
</div>
    </div>

</div>
</div>



<div className="container my-5" style={{background:'#f9f9f9'}}>
<h3 className="text-center">Why Choose Squbix</h3>
<hr/>
<div className="row">
<div className="col-md-4 my-2">
<div class="card h-100">
 <div className="card_img3" >
<img className="card_img3" src="../images/icons/ic53.png" alt="img"/>
</div>
<div class="card-body">
<h5 class="card-title text-center">Expert Team</h5>
<p class="card-text text-center">We have experts who help you choose the best technology 
and help set up communities and campaigns.</p>
</div>
</div>
</div>
<div className="col-md-4 my-2">
<div class="card h-100">
<div className="card_img3" >
<img className="card_img3" src="../images/icons/ic16.png" alt="img"/>
</div>
<div class="card-body">
<h5 class="card-title text-center">Technology</h5>
<p class="card-text text-center">We are highly experienced with 5 years of real-world experience. We help business adapting new technologies. We work tirelessly to provide best possible outcomes to businesses.</p>
</div>
</div>
</div>

<div className="col-md-4 my-2">
<div class="card h-100">
<div className="card_img3" >
<img className="card_img3" src="../images/icons/ic18.png" alt="img"/>
</div>
<div class="card-body">
<h5 class="card-title text-center">Research</h5>
<p class="card-text text-center">Our team At Squbix research rigorously to deliver best possible out comes to our clients by minimizing risk factors and maximizing success rate.</p>
</div>
</div>
</div>
<div className="col-md-4 my-2">
<div class="card card h-100">
 <div className="card_img3" >
<img className="card_img3" src="../images/icons/ic44.png" alt="img"/>
</div>
<div class="card-body">
<h5 class="card-title text-center">Transparency</h5>
<p class="card-text text-center">We keep fully transparency of our work with our clients which improves good relationship and ensures success of our clients.</p>
</div>
</div>
</div>


<div className="col-md-4 my-2">
<div class="card card h-100">
 <div className="card_img3" >
<img className="card_img3" src="../images/icons/ic19.png" alt="img"/>
</div>
<div class="card-body">
<h5 class="card-title text-center">Consulting</h5>
<p class="card-text text-center">Our team is best at researching on businesses which gives us clear view of business requirements, our expert team helps our clients to quickly adapt new technologies.</p>
</div>
</div>
</div>

<div className="col-md-4 my-2">
<div class="card card h-100">
 <div className="card_img3" >
<img className="card_img3" src="../images/icons/ic17.png" alt="img"/>
</div>
<div class="card-body">
<h5 class="card-title text-center">Operation</h5>
<p class="card-text text-center">In this competitive market a business need to adapt new technologies to grow to hold customer base and to stand with the rapid market growth in this technology driven world. We help our clients to quickly upgrade their technologies with the market change so they can see more growth</p>
</div>
</div>
</div>
</div>
</div>

        </>

    )
}
export default Home;