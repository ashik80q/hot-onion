import React from 'react';
import './FoodItem.css';

const FoodItem = (props) => {
   const {img,name,title,price} = props.food;
    return (
        <div className="col-xl-4 ">
        <div className="single-item text-center m-4 ">
                <div className="card p-4 ">
                    <img className="card-img-top" src={img} alt="food-img"/>
                    <h5  className="card-title"> {name}</h5>
                    <p className="card-title">{title}</p> 
                    <h4 className="price">${price}</h4>             
              </div>

          </div>  
        </div>     
         
                  
        
            

            
        
    );
};

export default FoodItem;