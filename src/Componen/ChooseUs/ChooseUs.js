import React from 'react';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <section className="why-choose-us py-5">
          <div className="container">
              <div className="section-title w-50 pd-4">
                 <h2>Why you choose us</h2>
                 <p className='pr-5'>
                 Barton waited twenty always repair in within we do. An delighted offering crusty mu is dagwood's at. Boy prosperous increasing surround
                 </p>
              </div>
              <div className="row">
                  <div className="col-xl-4 single-item">
                      <div className ="card">
                          <img className='card-img-top' src='https://i.ibb.co/HqtSM5D/adult-blur-blurred-background-687824.png' alt="Delivery img"/>
                          <div className="card-body choose-aria-content d-flex" >
                              <div className='chose-aria-icon'>
                                  <img src=' https://i.ibb.co/Rv9PmRs/Group-204.png' alt="icon"/>

                              </div>
                              <div>
                                  <h5 className="card-title">Fast Delivery</h5>
                                  <p className="card-text">
                                  Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future
                                  </p>
                                  <h6>See more</h6>
                              </div>
                             

                          </div>

                      </div>
                  </div>

                  {/* 2n row */}

                  <div className="col-xl-4 single-item">
                      <div className ="card">
                          <img className='card-img-top' src='https://i.ibb.co/BVjg0xy/chef-cook-food-33614.png' alt="Delivery img"/>
                          <div className="card-body choose-aria-content d-flex" >
                              <div className='chose-aria-icon'>
                                  <img src=' https://i.ibb.co/yfJDH6h/Group-1133.png' alt="icon"/>

                              </div>
                              <div>
                                  <h5 className="card-title">A Good Auto Responder</h5>
                                  <p className="card-text">
                                  Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future
                                  </p>
                                  <h6>See more</h6>
                              </div>
                             

                          </div>

                      </div>
                  </div>
                  {/* 3d card */}

                  
                  <div className="col-xl-4 single-item">
                      <div className ="card">
                          <img className='card-img-top' src='https://i.ibb.co/8g93wFh/architecture-building-city-2047397.png' alt="Delivery img"/>
                          <div className="card-body choose-aria-content d-flex" >
                              <div className='chose-aria-icon'>
                                  <img src=' https://i.ibb.co/12SM46m/Group-245.png' alt="icon"/>

                              </div>
                              <div>
                                  <h5 className="card-title">Home Delivery</h5>
                                  <p className="card-text">
                                  Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future
                                  </p>
                                  <h6>See more</h6>
                              </div>
                             

                          </div>

                      </div>
                  </div>


              </div>
          </div>
          
        </section>
    );
};

export default ChooseUs;