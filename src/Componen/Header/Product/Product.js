import React from 'react';
import './Product.css'

const Product = () => {
    return (
        <section className="food-catagories-aria">
          <div className="container">
              <div className="row">
                  <div className="catagories m-auto pay-5">
                    <ul className="d-flex">
                        <li><button className="active btn">Breakfast</button></li>
                        <li><button className="btn">Lunch</button></li>
                        <li><button className="btn">Dinner</button></li>
                    </ul>
                  </div>
                  <div className="f-right d-flex align-items-center text-danger">
                    <p className="see-all">See All</p>
                  </div>
              </div>
              <div className="row"></div>

          </div>
        </section>
    );
};

export default Product;