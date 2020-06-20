import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SingleFood.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { addToDatabaseCart } from '../../utilities/databaseManager';


const SingleFood = () => {
    const [currentFood, setCurrentFood] = useState({});
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();

   useEffect(()=>{
       fetch('https://damp-garden-44080.herokuapp.com/food/' + id)
       .then(res => res.json())
       .then(data => setCurrentFood(data))
        
   },[id])


    // useEffect(() => {
    //     const FoodDetails = item.find(fd => fd.id === parseInt(id));
    //     setCurrentFood(FoodDetails);

    // }, [item, id])

    const handleAddedFood = (currentFood) => {
       const count = currentFood.quantity = quantity;
      
         console.log('single foods ', currentFood.id);
         
        addToDatabaseCart(currentFood.id, count);
    }

    const handlePlus = () => {
        setQuantity(quantity + 1);

    }
    const handleMinus = () => {
        setQuantity(quantity - 1);
    }


    return (

       

            <div style={{ marginTop: '50px', width:'100%', height:'80%' }} className="container shadow">
                   <div className="item-close py-4">
                       <Link to="/">
                         <span className="bg-danger rounded-circle d-block m-auto " style={{height:'50px', width:'50px', lineHeight:'50px', color:'white'}}><FontAwesomeIcon icon={faTimes} /> </span>
                       </Link>
                    </div>
                <div className="row" >
                                     
                    <div className="col-md-6 ">
                        <h2 className="name-text">{currentFood.name}</h2>
                        <p className="name-text">{currentFood.details}</p>

                        <div style={{marginTop:"50px"}} className="d-flex">
                            <span><h3>${currentFood.price}</h3></span>
                            <div className="card-controller btn-style">
                                {quantity === 1 ? <button disabled onClick={handleMinus} className="btn"><FontAwesomeIcon icon={faMinus} /></button> : <button onClick={handleMinus} className="btn"><FontAwesomeIcon icon={faMinus} /></button>}
                                {quantity}
                                <button onClick={handlePlus} className="btn"><FontAwesomeIcon icon={faPlus} /></button>

                            </div>
                        </div>

                        <button onClick={() => handleAddedFood(currentFood)} className="btn btn-danger   input-style"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                    </div>
                    <div className="col-md-6">
                     
                        <img className="img-style" src={currentFood.img} alt="" />
                      
                       
                    </div>
                </div>
            </div>

      
    )
}

export default SingleFood;