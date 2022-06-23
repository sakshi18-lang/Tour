import React from 'react'
import Carousel from 'react-bootstrap/Carousel' 
import '../../App.css';
import './blog.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import Addtour from ".././Addtour";
import Navbar from '../Navbar';
import Post from '../Posts';


import { Media } from 'reactstrap';
  
 function Blogg() {
    return (
     
        <div>
           <Navbar/>
<div className="container">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../images/g.jfif').default}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide </h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     className="d-block w-100"
     src={require('../images/g2.jfif').default}
     alt="Second slide"
   />

   <Carousel.Caption>
     <h3>Second slide </h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="d-block w-100"
     src={require('../images/greece.jpg').default}
     alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide </h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   <img
     className="d-block w-100"
     src={require('../images/b2.jfif').default}
     alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Fourth slide </h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<h2>Famous destinations</h2>
<div className="flex">
  

<Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>


    </div>
  

</div>

    )
}
export default Blogg;