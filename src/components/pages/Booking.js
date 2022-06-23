import React, { useState } from "react";
import "../../App.css";
import { Modal,Button } from 'react-bootstrap';
import Navbar from '../Navbar';

const Booking = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    
    dplace:"",
    dcity:"",
    mem:"",
    
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, dplace,dcity,mem } = userData;

    if (firstName && lastName && phone && email &&dplace &&dcity &&mem ) {
      const res = fetch(
        "https://first-push-21b3f-default-rtdb.firebaseio.com/booking.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
           
            dplace,
            dcity,
            mem,
            
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          
          dplace:"",
          dcity:"",
          mem:"",
         
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (

    <div className="contact book">
      <Navbar/>
      <section className="contactus-section">
        
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder=" Name"
                          value={userData.Name}
                          onChange={postUserData}
                        />
                      </div>
                      
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="date"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Date "
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="mem"
                          id=""
                          className="form-control"
                          placeholder="No of Travellers"
                          value={userData.mem}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="dplace"
                          id=""
                          className="form-control"
                          placeholder="Destination Place "
                          value={userData.dplace}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="dcity"
                          id=""
                          className="form-control"
                          placeholder="Departure city"
                          value={userData.dcity}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    
                    
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that TRVL may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="submit w-100"
                      onClick={submitData}>
                      Book Now
                    </button>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        
      </section>
    </div>
  );
};

export default Booking;