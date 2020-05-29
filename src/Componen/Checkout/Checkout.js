import React from 'react';
import './Checkout.css';
import Auth from '../UseAuth/UseAuth';
import { Link } from 'react-router-dom';


const Checkout = () => {
    const auth = Auth();
    console.log(auth.user);
    
    return (
        <div style={{ margin: '50px 0 50px 0' }}>

            <div className="container">
                <div className="row">
                   <div className="col-md-7 map-img">
                       <img src="https://i.ibb.co/VCdj718/ordercomplete-e34eab0b.png" alt=""/>
                       
                    </div> 

                   <div className="col-md-4 bg-light p-3 offset-1">
                       
                        <img style={{ width: '130px', height: 'auto', marginBottom: '20px', display: 'block', justifyContent: 'center' }} src="https://i.ibb.co/pvxGxrM/Group-1151.png" alt="" />
                        <div className="cart">
                        <h5 className=" text-align-1">Your Location</h5>
                        <p  className=" text-align-1">107 Rd No 8</p>
                        <h5  className=" text-align-1">Shop Address</h5>
                        <p className=" text-align-1"><strong>Grand Mughal Restaurant</strong></p>
                        </div>
                        <h2 className=" text-align">09.30</h2>
                        <p className=" text-align">Estimate Delivery</p>
                        <div className="d-flex md-3">
                        <img style={{ width: '80px', height: 'auto', marginRight: '30px' }} src="https://i.ibb.co/9cYQyr4/Group-1152.png" alt="" />
                        <div>
                            { auth.user?
                              <h5 className=" text-align">{auth.user.displayName}</h5>
                              :
                              <h5 className=" text-align">Hamim</h5>
                            
                            }
                          
                            <p className=" text-align">Your Rider</p>
                        </div>
                    </div>
                    <Link to="/">
                      <input className="form-control btn-danger" type="submit" value="Contact" />
                    </Link>
                   
                    
                   </div> 

                </div>
            
            </div>
        </div>
    );
};

export default Checkout;