import { useState, useContext } from "react";
import { AppContext } from "./Context";
const Footer_subscribe = () => {
  const { insertSubscriber } = useContext(AppContext);
  const [newSubscriber, setNewSubscriber] = useState({});

  // Storing the Insert Subscriber Form Data.
  const addNewSubscriber = (e, field) => {
    setNewSubscriber({
      ...newSubscriber,
      [field]: e.target.value,
    });
  };

  // Inserting a new Subscriber into the Database.
  const submitSubscriber = (e) => {
    e.preventDefault();
    insertSubscriber(newSubscriber);
    e.target.reset();
  };

  return (


    <form onSubmit={submitSubscriber}>
    <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input type="text" id="_name" onChange={(e) => addNewSubscriber(e, "name")} 
      class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
      placeholder="Enter Name" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Email</label>
      <input type="email" id="_email" onChange={(e) => addNewSubscriber(e, "email")} class="form-control" id="exampleInputPassword1" placeholder="Enter Email" />
    </div>
  
    <button type="submit" value="Insert" class="btn btn-primary">Subscribe</button>
  </form>


//     <div class="card border-primary rounded-0">
//        <div class="card-header p-0">
//           <div class="bg-primary text-white text-center py-2">
//              <h3 style={{color:"white"}}><i class="fa fa-envelope"></i> Write to us:</h3>
//           </div>
//        </div>
//        <div class="card-body p-3">
//           <form onSubmit={submitSubscriber}>
//              <div class="form-group">
//              <label> Your name </label>
//              <div class="input-group">
// <input type="text" id="_name"
//         onChange={(e) => addNewSubscriber(e, "name")} class="form-control" placeholder="Your name" />
//              </div>
//        </div>
//              <div class="form-group">
//                 <label>Your email</label>
//                 <div class="input-group mb-2 mb-sm-0">
//                    <input type="email" onChange={(e) => addNewSubscriber(e, "email")} id="_email" class="form-control" placeholder="Email" />
//                 </div>
//              </div>

//              <div class="text-center">
//                 <input type="submit" value="Insert" class="btn btn-primary btn-block rounded-0 py-2" />
//              </div>
//              </form>
//          </div>
       
//        </div>

  );
};

export default Footer_subscribe;