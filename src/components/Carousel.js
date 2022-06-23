import React, { Component } from "react";
import Slider from "react-slick";
import "../App.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 3,
      };
      return (
        <>
        <div className="width">
          <h2> Famous Indian destinations</h2>
          <Slider {...settings}>
            <div className="mm">
            <img  className="ff"    src={require('./images/srikant-sahoo-r2L6vCKaVRk-unsplash.jpg').default}/>
              <h3>DELHI</h3>
            </div>
            <div className="mm">
            <img src={require('./images/img-home.jpg').default}/>
              <h3>UTTRAKHAND</h3>
            </div>
            <div className="mm">
            <img src={require('./images/tim-van-kempen-mpYKQK3GzSE-unsplash.jpg').default}/>
              <h3>ARUNACHAL PRADESH</h3>
            </div>
            <div className="mm">
            <img src={require('./images/dexter-fernandes-y97sM41-g9k-unsplash.jpg').default}/>
              <h3>RAJASTHAN</h3>
            </div>
            <div className="mm">
            <img src={require('./images/building1.jfif').default}/>
              <h3>MUMBAI</h3>
            </div>
            <div className="mm">
            <img src={require('./images/3.jpg').default}/>
              <h3>DAMAN DIU</h3>
            </div>
            <div className="mm">
            <img src={require('./images/b2.jfif').default}/>
              <h3>MUMBAI</h3>
            </div>
            <div className="mm">
            <img src={require('./images/harsh-jain-LgYuGuVEZYY-unsplash.jpg').default}/>
              <h3>KASHMIR</h3>
            </div>
            <div className="mm">
            <img src={require('./images/rahul-sharma-b4s7Yif1TsM-unsplash.jpg').default}/>
              <h3>KERALA</h3>
            </div>
          </Slider>
        </div>
        <div className="width">
        <h2> Most Visited Destinations </h2>
        <Slider {...settings}>
          <div className="mm">
          <img  className="ff"    src={require('./images/paris.jpg').default}/>
            <h3>PARIS</h3>
          </div>
          <div className="mm">
          <img src={require('./images/jet-dela-cruz-AOI_fg7A28w-unsplash.jpg').default}/>
            <h3>SOUTH KOREA</h3>
          </div>
          <div className="mm">
          <img src={require('./images/swapnil-bapat-sJ7pYyJFyuA-unsplash.jpg').default}/>
            <h3>SINGAPORE</h3>
          </div>
          <div className="mm">
          <img src={require('./images/ludovico-lovisetto-t-BU61kt6Cw-unsplash.jpg').default}/>
            <h3>GERMANY</h3>
          </div>
          <div className="mm">
          <img src={require('./images/photo-1516685304081-de7947d419d5.jfif').default}/>
            <h3>5</h3>
          </div>
          <div className="mm">
          <img src={require('./images/s-migaj-Yui5vfKHuzs-unsplash.jpg').default}/>
            <h3>SWITZERLAND</h3>
          </div>
          <div className="mm">
          <img src={require('./images/swapnil-bapat-sJ7pYyJFyuA-unsplash.jpg').default}/>
            <h3>SINGAPORE</h3>
          </div>
          <div className="mm">
          <img src={require('./images/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg').default}/>
            <h3>POLAND</h3>
          </div>
          <div className="mm">
          <img src={require('./images/venice.jfif').default}/>
            <h3>VENICE</h3>
          </div>
        </Slider>
      </div>
      </>
      );
    }
  }