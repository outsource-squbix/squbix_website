import React from "react";
import Contact_form from "./Contact_form";
import { Provider } from "../../Components/Context";
import { Actions } from "../../Components/Actions";
import { useState, useContext } from "react";
import { AppContext } from "../../Components/Context";

const Contact = () => {
  const data = Actions();
  // Node Backend handle
  //    const [name, setName] = useState("");
  //    const [email, setEmail] = useState("");
  //    const [number, setNumber] = useState("");
  //    const [message, setMessage] = useState("");

  //    const addData = () => {
  //      Axios.post('http://localhost:5000/create', {
  //        name: name,
  //        email: email,
  //        number: number,
  //        message: message
  //  }).then(() => {
  //    if(!alert('Message Sent!')){window.location.reload();}
  //  })
  //    }

  // }

  return (
    <>
      <Provider value={data}>
        <div class="container" style={{ marginTop: "50px" }} id="sq_contact">
          <div class="row">
            <div class="col-md-6">
              <img class="imgab2 my-3" src="../images/contact2.png" />
            </div>
            <div class="col-md-6" style={{ marginTop: "90px" }} id="con_tact">
              <h3 style={{ color: "white" }}>
                Enterprise Grade BLOCKCHAIN Solution
              </h3>

              <p style={{ color: "white" }}>
                <small>
                  Expertise in Digital transferamation Strategy, User Experience
                  Design, Software Development, Testing Automation and Training,
                  we solve business and user problems for our customers. Having
                  presence of Offshore Team in India and Singapore. by experts
                </small>
              </p>
              <button
                className="btn_contact"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <section class="container">
          <h2 className="text-center">Contact Us</h2>
          <hr />
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <div class="mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.648829770919!2d103.90237881475403!3d1.3872988989882078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da161a17b2bf67%3A0x8855843d8f20ac3e!2sRivervale%20Dr%2C%20Singapore!5e0!3m2!1sen!2sin!4v1618836921857!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>

              <div class="row text-center">
                <div class="col-md-4">
                  <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
                    <i class="fa fa-map-marker"></i>
                  </a>
                  <h4>Singapore Office</h4>
                  <p>
                    #07-414, 121, <br />
                    Rivervale Dr,
                    <br />
                    Singapore - 540121
                  </p>
                </div>
                <div class="col-md-4">
                  <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
                    <i class="fa fa-map-marker"></i>
                  </a>
                  <h4>Bengaluru Office</h4>
                  <p>
                    Ground Flr, E1 Block(Beech) <br />
                    Manyata Embassy Business Park,
                    <br />
                    Outer Ring Road, Bangalore 560045, India
                  </p>
                </div>
                <div class="col-md-4">
                  <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
                    <i class="fa fa-map-marker"></i>
                  </a>
                  <h4>Bhubaneswar Office</h4>
                  <p>
                    PLOT NO-4474/7895 <br />
                    TANKAPANI ROAD, MEGHESWAR COLONY <br />
                    BHUBANESWAR 751018 India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Contact Us
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Contact_form />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
};

export default Contact;
