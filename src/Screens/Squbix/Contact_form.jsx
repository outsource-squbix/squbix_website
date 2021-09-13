import { useState, useContext } from "react";
import { AppContext } from "../../Components/Context";
const Contact_form = () => {
  const { insertUser } = useContext(AppContext);
  const [newUser, setNewUser] = useState({});

  // Storing the Insert User Form Data.
  const addNewUser = (e, field) => {
    setNewUser({
      ...newUser,
      [field]: e.target.value,
    });
  };

  // Inserting a new user into the Database.
  const submitUser = (e) => {
    e.preventDefault();
    insertUser(newUser);
    e.target.reset();
  };

  return (
    <div class="card border-primary rounded-0">
      <div class="card-header p-0">
        <div class="bg-primary text-white text-center py-2">
          <h3 style={{ color: "white" }}>
            <i class="fa fa-envelope"></i> Write to us:
          </h3>
        </div>
      </div>
      <div class="card-body p-3">
        <form onSubmit={submitUser}>
          <div class="form-group">
            <label> Your name </label>
            <div class="input-group">
              <input
                type="text"
                id="_name"
                onChange={(e) => addNewUser(e, "name")}
                class="form-control"
                placeholder="Your name"
              />
            </div>
          </div>
          <div class="form-group">
            <label>Your email</label>
            <div class="input-group mb-2 mb-sm-0">
              <input
                type="email"
                onChange={(e) => addNewUser(e, "email")}
                id="_email"
                class="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="form-group">
            <label>Contact Number</label>
            <div class="input-group mb-2 mb-sm-0">
              <input
                type="text"
                onChange={(e) => addNewUser(e, "number")}
                id="_number"
                class="form-control"
                placeholder="Number"
              />
            </div>
          </div>
          <div class="form-group">
            <label>Message</label>
            <div class="input-group mb-2 mb-sm-0">
              <textarea
                class="form-control"
                onChange={(e) => addNewUser(e, "message")}
                id="_message"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <div class="text-center">
            <input
              type="submit"
              value="Insert"
              class="btn btn-primary btn-block rounded-0 py-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact_form;
