import React, { useEffect, useState } from 'react';
import './Header.css'
import icon from '../../hot-onion-restaurent-resources-master/img/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { getDatabaseCart } from '../../utilities/databaseManager';
import Auth, { AuthProvider } from '../UseAuth/UseAuth';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {

const [cart, setCart] = useState([]);
const auth = Auth();
// console.log(auth.user.displayName);


   useEffect(()=>{
    const saveCart = getDatabaseCart();
    const foodId = Object.keys(saveCart);
   setCart(foodId)
    

  },[])
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
                       
                          <Link to="/cart"><button className='btn'><FontAwesomeIcon icon={faShoppingCart} /> {cart.length}</button></Link> 
     
                       {
                         auth.user?
                         <a href="/"><button onClick={auth.signOut} className='btn'>Logout</button></a>
                        
                         : <a href="/login"><button className='btn'>Login</button></a>
                       }
                       {
                         auth.user?
                         <Link to='/profile'>
                         <a href="/"><button className="btn btn-danger">{auth.user.displayName}</button></a>
                         </Link>
                         :
                         <Link to='/login'>
                         <a href="/"><button className="btn btn-danger">Sign up</button></a>
                         </Link>
                       }
                      </div>
                     </div>
                    </div>

                </div>



               

            </div>

        
    );
};

export default Header;