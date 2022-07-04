import React from 'react'
import {NavLink} from 'react-router-dom'
import Footer_subscribe from './Footer_subscribe';
import { Actions } from './Actions';
import { Provider } from './Context';

const Footer = () => {
	const data = Actions();
    return (
        <>
		<Provider value={data}>
<section class="footers bg-light pt-5 pb-3" >
   <div class="container pt-5" style={{background:'#065d9a'}}>
       <div class="row">
           <div class="col-xs-12 col-sm-6 col-md-4 footers-one">
    		    <div class="footers-logo">
				<div className="row">
			<NavLink class="navbar-brand" to="/"><img className="img_logo" src="/images/logo.png" alt="logo"/></NavLink>
  <NavLink to="/">
<div className="navbar-text">
 <div className="col">
		  <h1 className="logo_text_main" style={{color:'white'}}>SQUBIX DIGITAL</h1>
	  </div>
	  <div className="col">
		<small className="logo_text" style={{color:'white'}}>A SWNGlobal Blockchain Service</small>
	  </div>
 </div>
</NavLink> 
			</div>
    		    </div>
    		    <div class="footers-info mt-4">
					<div className="row">
						<div className="col-md-4">
							<h5 className="text-center"></h5>
							<p></p>
						</div>
						<div className="col-md-4">

						</div>
						<div className="col-md-4">

						</div>
					</div>
    		        <p>Global Presence : Singapore | Bengaluru | Bhubaneswar</p>
    		    </div>
				<br/>
    		    <div class="social-icons"> 
                <a target="_blank" href="https://www.facebook.com/Squbix-789729197819785"><i class="fa fa-facebook "></i></a>
                <a target="_blank" href="https://twitter.com/squbixpro" style={{marginLeft:'10px'}}><i class="fa fa-twitter "></i></a>
	            <a target="_blank" href="https://www.linkedin.com/company/10438852/" style={{marginLeft:'10px'}}><i class="fa fa-linkedin "></i></a>
	            <a href="/" style={{marginLeft:'10px'}}><i class="fa fa-instagram "></i></a>
				<button className="btn_footer" data-toggle="modal" data-target="#exampleModalCenter">Subscribe</button>
	        </div>
    		</div>
    	   <div class="col-xs-12 col-sm-6 col-md-2 footers-two">
    		    <h5 style={{color:'white'}}>Quick Links</h5>
    		    <ul class="list-unstyled">
    			 <li><NavLink to='/about'>About</NavLink></li>
    		<li><NavLink to='/education'>Training And Education</NavLink></li>	 
    			 <li> <NavLink to='/career'>Career</NavLink></li>
    			 <li><NavLink to='/contact'>Contact</NavLink></li>
    			 <li><NavLink to='/crypto_wallet'>DIGITAL WALLET</NavLink></li>
    			</ul>
    		</div>
    	   <div class="col-xs-12 col-sm-6 col-md-2 footers-three">
    		    <h5 style={{color:'white'}}>Quick Links</h5>
    		    <ul class="list-unstyled">
    			 <li><NavLink to="/pvt_b_chain">Private Blockchain</NavLink></li>
    			 <li><NavLink to="/smartcontract">Smart Contract Developement</NavLink></li>
    			 <li><NavLink to="/dapps">dApps Development</NavLink></li>
    			 <li><NavLink to="/dse">White Label Exchange</NavLink></li>
    			 {/* <li><NavLink to="/Cryptoex/dex">Decentralise/Centralise</NavLink></li> */}
    			</ul>
    		</div>
    	    <div class="col-xs-12 col-sm-6 col-md-4 footers-four">
    		    <h5 style={{color:'white'}}>Location</h5>
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.59902937524!2d103.9044552!3d1.3867486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x76dd822fba857d2b!2sSqubix%20Digital%20pte%20ltd!5e0!3m2!1sen!2sin!4v1621928712345!5m2!1sen!2sin" 
				width="100%" height="170" frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" 
				tabindex="0"></iframe>
				
    		</div>

			
       </div>
	   <br/>
	   <p className="text-center">
   © Copyright 2016 - 2022 Squbix Digital Pte. Ltd. | All Rights Reserved.
   </p>
   <br/>
   </div>
 
</section>



<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 style={{color: 'black'}} class="modal-title" id="exampleModalLongTitle">Subscribe to our newsletter</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
<Footer_subscribe/>
      </div>
    </div>
  </div>
</div>
</Provider>
        </>
    )
}
export default Footer;