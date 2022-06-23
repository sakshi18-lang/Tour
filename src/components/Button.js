import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './button.css';
import '.././App.css';
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];
  
    export const Button=(
        {
            children,
            type,
            onClick,
            buttonStyle,
            buttonSize,
            path,props,src
        }
    )=>{
        const checkButtonStyle=STYLES.includes(buttonStyle)
        ?buttonStyle:STYLES[0];
        const CheckButtonSize=SIZES.includes(buttonSize)?buttonSize:SIZES[0];
        
        return ( <Link to={path}  className='btn-mobile'>
          <button className={'btn ${checkButtonStyle} ${checkButtonSize}'}
          onClick={onClick} type={type}>
               {children}
          </button>
          
        


        </Link>)
    }

export default Button;