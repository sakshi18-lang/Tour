import React from 'react';
import '../../App.css';
import '../cards.css';
import './services.css';
import Carditem from '../Carditem';
import Contact from './Contact';
import {Card} from 'react-bootstrap' ;
import {Button}from 'react-bootstrap' ;
import Navbar from '../Navbar';
import { MDBIcon } from 'mdb-react-ui-kit';

export default function Services() {
  return (
   <div>
      <Navbar/>
   
  <div className="main">
    <h2>Services</h2>
  <br></br>
  <div className="row">
  
  <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            
                        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../images/spencer-davis-0QcSnCM0aMc-unsplash.jpg').default} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../images/bg.jfif').default} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('../images/aeroplane.jfif').default} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
                        </ul>
                        
                    </div>

  </div>
  <h2>Services</h2>
     <div className="wrapper">
  <div><i class="fas fa-bus-alt"></i>Transportation</div>
  <div><i class="fab fa-accessible-icon"></i></div>
  <div><i class="fas fa-bath"></i>Hotels</div>
  </div>
  <div className="wrapper">
  <div><i class="fab fa-cc-paypal"></i>Payment methods</div>
  <div><i class="fab fa-cc-visa"></i>Easy Visa</div>
  <div><i class="fas fa-cocktail"></i>Bars</div>
  </div>
  <div className="wrapper">
 
  <div><i class="fas fa-certificate"></i>Certified</div>
  <div><i class="fas fa-hiking"></i>Adventures</div>
  <div><i class="fab fa-jenkins"></i>Service</div>
  </div>
  <div className="wrapper">
  <div><i class="fas fa-plane-departure"></i>Travelling</div>
  <div><i class="fas fa-star-half-alt"></i></div>
  <div><i class="fas fa-heart"></i>All for the customers</div>
      </div>
     
  </div>
  </div>
  );
}