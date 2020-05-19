import React, { useState } from 'react';
import './Product.css'
import Breakfast from '../fakeData/Breakfast';
import FoodItem from '../../FoodItem/FoodItem';

const Product = () => {
  const data = Breakfast;
  const [food, setFood] = useState(data);
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
              <div className="row  food-item">
              
             
                {
                  food.map(fd => <FoodItem food ={fd}></FoodItem>)
                }
               
                </div>
             

          </div>
        </section>
    );
};

export default Product;