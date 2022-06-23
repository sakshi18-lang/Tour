import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import {FaHotel } from 'react-icons/fa';
import {MdFlight,MdFoodBank } from 'react-icons/md';
import {Button ,Modal} from 'react-bootstrap';

import './cards.css';
function Carditem(props) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


  const [userData, setUserData] = useState({
    firstName: "",
    // lastName: "",
    // phone: "",
    // email: "",
    // address: "",
    // dplace:"",
    // dcity:"",
    // mem:"",
    
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const postUserData2 = (event) => {
    name = event.target.name;
    value = event.target.files[0];

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName } = userData;

    if (firstName  ) {
      const res = fetch(
        "https://first-push-21b3f-default-rtdb.firebaseio.com/booking.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            // lastName,
            // phone,
            // email,
            // address,
            // dplace,
            // dcity,
            // mem,
            
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          // lastName: "",
          // phone: "",
          // email: "",
          // address: "",
          // dplace:"",
          // dcity:"",
          // mem:"",
         
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

return(
<div className="main">
<li className='cards__item'>
    <Link className='cards__item__link' to='/book'>
    <figure className='cards__item__pic-wrap' data-category={props.label}>
        <img className='cards__item__img'
        alt='travel image'
        src={props.src}/>
        </figure>
        <div className='cards__item__info'>
        <MdFlight/>
    <FaHotel/>
   
   <MdFoodBank/>
            <h5 className='cards__item__text'>{props.text}</h5>
            
   <h5 className='cards__item__price'>Price:{props.price}</h5>
           
    <Button className="bbb" >  <Link to='/book'>book now</Link>
      
       </Button>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking for {props.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                    </form>
        </Modal.Body>
        
      </Modal>

        </div>
        </Link>
</li>
</div>
);
}
export default Carditem;