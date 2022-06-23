import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button.js'
import './navbar.css';
function Navbar({logout}) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileView = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {  
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo">
                        TRVL <i className="fab fa-typo3" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-links' onClick={closeMobileView}>
                                Home
                    </Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link to='/blogg' className='nav-links' onClick={closeMobileView}>
                                Blog
                    </Link>
                        </li>  
                        <li className='nav-item'>
                            <Link to='/Services' className='nav-links' onClick={closeMobileView}>
                                Services
                    </Link>
                        </li>  
                        
                        <li className='nav-item'>
                            <Link to='/signup' className='nav-links' onClick={closeMobileView}>
                                Sign up
                    </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/login' className='nav-links'  onClick={logout}>
                                Log out
                    </Link>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>
        </>
    );
}
export default Navbar;