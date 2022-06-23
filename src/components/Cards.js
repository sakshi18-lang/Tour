import React from 'react';
import './cards.css';
import '.././App.css';
import Carditem from './Carditem';
import { Button } from 'react-bootstrap';
import { Card} from 'react-bootstrap';
import {FaHotel } from 'react-icons/fa';
import {MdFlight,MdFoodBank } from 'react-icons/md';

function Cards(){
    return(<div>
        <div className="shop">
     
        <div className="shop__text">
        <div className='shop-cont-l'>
            <h1 className="left">About 20000 people trusted and travelled with us</h1>
            </div>
            
    </div>
        
      
    </div>
        <div className='cards'>
           
                <div className='cards__container'>
                <h1>Check out these amazing destinations</h1>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            
                            <Carditem 
                           src={require('./images/japan.jfif').default}
                            text='Japan'
                            label='Adventure'
                            price='30000'
                           
                            />
                             <Carditem 
                           src={require('./images/greece.jpg').default}
                            text='Greece'
                            label='Adventure'
                            price='30000'
                            />
                            <Carditem
                            src={require('./images/thailand.jfif').default}
                            text='Thailand'
                            label='Adventure'
                            price='30000'
                            />
                            <Carditem
                            src={require('./images/greece.jpg').default}
                            text='Dubai'
                            label='Adventure'
                            price='30000'
                           />
                        </ul>
                        <ul className='cards__items'>
                            <Carditem
                            src={require('./images/g.jfif').default}
                            text='Kerala'
                            label='Adventure'
                            price='30000'
                            />
                            <Carditem
                            src={require('./images/img-3.jpg').default}
                            text='New York'
                            label='Adventure'
                            price='30000'
                            />
                             <Carditem
                            src={require('./images/g4.jfif').default}
                            text='Manali'
                            label='Adventure'
                            price='30000'
                            />
                        </ul>
                    </div>

                    
                </div>

            
        </div>
        </div>
    );

}
export default Cards;