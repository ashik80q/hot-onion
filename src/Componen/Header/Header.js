import React from 'react';
import './Header.css'
import icon from '../../hot-onion-restaurent-resources-master/img/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        
            <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col">
                      <div className="logo-aria">
                        <a href="/"> <img src={icon} alt="hot-onion-icon"/></a>
                      </div>

                    </div>

                    <div className="col">
                     <div className="header-right">
                      <div className="d-flex">
                        <a href="/#"><button className='btn'><FontAwesomeIcon icon={faShoppingCart} /></button></a>
                        <a href="/#"><button className='btn'>Login</button></a>
                        <a href="/#"><button className="btn btn-danger">Sign up</button></a>
                      </div>
                     </div>
                    </div>

                </div>



               

            </div>

        
    );
};

export default Header;