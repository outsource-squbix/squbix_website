// import React from 'react';
// import ReactDOM from 'react-dom';
// import Hcard from './Hcard'
// import Hdata from './Hdata'
// import axios from 'axios';
// import { Component } from 'react';

// class Home2 extends Component{
//   state = {
//     name:'',
//     email:'',
//     number:'',
//     msg:'',
//     sent:false
//   }

//   handleName=(e)=>{
//     this.setState({
//       name:e.target.value
//     })
//   }

//   handleEmail=(e)=>{
//     this.setState({
//       email:e.target.value
//     })
//   }

//   handleNumber=(e)=>{
//     this.setState({
//       number:e.target.value
//     })
//   }

//   handleMsg=(e)=>{
//     this.setState({
//       msg:e.target.value
//     })
//   }


// formSubmit=(e)=>{
// e.preventDefault();
// let data={
//   name:this.state.name,
//   email:this.state.email,
//   number:this.state.number,
//   msg:this.state.msg
// }

// axios.post('/api/forma',data)
// .then(res=>{
//   this.setState({
//     sent:true,
//   },this.resetForm())
// }).catch(()=>{
//   console.log('message not sent');
// })

// }


// resetForm=()=>{
// this.setState({
//   name:'',
//   email:'',
//   number:'',
//   msg:''
// })

// setTimeout(()=>{
//   this.setState({
//     sent:false,
//   })
// },3000)

// }

// render(){

//     return (
//         <>

//         <div className="container my-5" style={{background:'rgb(21 60 120)'}}>
//           <div className="row">
//           <div className="col-md-6">

//           <img class="imghm" src="https://rescody.com/wp-content/uploads/2019/10/rescody_about_us.svg" />
//           </div>
//           <div className="col-md-6">
//             <div className="right_side my-5" style={{color:'white'}}>
//             <h3 style={{color:'white'}}>Enterprise Grade BLOCKCHAIN Solution</h3>
//                                     <small>Bhubaneswar, India</small>
//                                     <p><small>Forward-thinking enterprise blockchain solutions
// by experts</small></p>

//                                     <button class="btn_contact" data-toggle="modal" data-target="#exampleModal">Contact Us</button>
//             </div>
          
//           </div>
//           </div>

//         </div>


//                         <br/>
//                         <div class="container px-5">
//                             <div class="row">


//                                 <div class="col-md-6" style={{color:'black'}}>
 
                              
//                                     <h3>Shift To BLOCKCHAIN Revolution</h3>
//                                     <small>Squbix – a leading blockchain development 
//                                         company – harnesses the power of blockchain and 
//                                         other technologies like distributed ledger and 
//                                         smart contracts to build scalable, asset agnostic 
//                                         applications such as white label exchange platforms 
//                                         (centralized, decentralized and P2P), 
//                                         smart wallets, ICO, STO, tokens and other enterprise 
//                                         blockchain solutions development. Our experts follow 
//                                         design thinking-driven approach to identify blockchain use 
//                                         cases and create intelligent strategies around the same to 
//                                         accelerate your deployments. Together, we are decentralizing 
//                                         the world by combining our deep domain expertise and rich 
//                                         experience to deliver blockchain solutions at 
//                                         enterprise scale.</small>
                                    
                                  
//                                 </div>

//                                 <div class="col-md-6">
//                                    <img class="imghm2" src="images/blockchain.png" />
//                                 </div>
//                             </div>
                            
//                         </div>

//                         <div className="hmfront3 px-5 my-5">
//                             <h2 className="text-center my-1">BlockChain Offerings</h2>
//                             <p className="text-center">Enterprise blockchain services to build a better future.</p>
// <div className="row">
// {
//     Hdata.map((val, ind)=>{
//         return <Hcard
//         text={val.text}
//         title={val.title}
//         />
//     })
//     }
    
// </div>
// </div>


// <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Contact Us</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//       <form onSubmit={this.formSubmit}>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Full Name</label>
//     <input type="text" class="form-control" id="name" name="name" value={this.state.name} onChange={this.handleName}/>

//     <label for="exampleInputEmail1">Email Id</label>
//     <input type="email" class="form-control" id="email" name="email" value={this.state.email} onChange={this.handleEmail}/>

//     <label for="exampleInputEmail1">Contact Number</label>
//     <input type="text" class="form-control" id="number" name="number" value={this.state.number} onChange={this.handleNumber}/>

//     <label for="exampleInputEmail1">Message</label>
//    <textarea class="form-control" id="msg" name="msg" value={this.state.msg} onChange={this.handleMsg}></textarea>
//   </div>
//   {/* <div className={this.state.sent ? 'msgAppear':'msg'}>Message Has Been Sent</div> */}
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
//       </div>

//     </div>
//   </div>
// </div>
//         </>

//     )
// }}
// export default Home2;