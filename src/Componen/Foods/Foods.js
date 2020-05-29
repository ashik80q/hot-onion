import React from 'react';
import './Foods.css';
import { Link } from 'react-router-dom';

const Foods = (props) => {
  console.log(props);
  
    const { name, img, title, price, id } = props.food;

    return (
        <div className="col-xl-4 ">
          <Link  className="link" to={"/food/" + id}>  
        <div className="single-item text-center m-4 ">
        
                <div className="card p-4 ">
                    <img className="card-img-top" src={img} alt="food-img"/>
                    <h5  className="card-title"> {name}</h5>
                    <p className="card-title">{title}</p> 
                    <h4 className="price">${price}</h4>             
              </div>
            

          </div>  
          </Link>  
        </div> 
    );
};

export default Foods;