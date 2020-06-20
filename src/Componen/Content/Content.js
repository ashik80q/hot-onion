import React, { useState, useEffect } from 'react';
import './Content.css'
import Foods from '../Foods/Foods';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';



const Content = () => {
    const [Food, setFoods] = useState([]);
    const [currentFood, setCurrentFood] = useState([]);
    const [cart, setCart] = useState([]);

  
    

    useEffect(() => {
        fetch('https://damp-garden-44080.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => {
            setFoods(data);
            console.log(data.id);
            
        } )
       
    }, [])

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const foodId = Object.keys(saveCart);
        setCart(foodId)


    }, [])
    




    useEffect(() => {
        const FindingFood = Food.filter(fd => fd.category === 'Lunch');

        setCurrentFood(FindingFood);

        document.getElementById('breakfast').classList.remove('active');

        document.getElementById('lunch').classList.remove('active');

        document.getElementById('dinner').classList.remove('active');
    }, [Food])


    const handleBreakfast = () => {
        const FindingFood = Food.filter(fd => fd.category === 'Breakfast');

        setCurrentFood(FindingFood);

        document.getElementById('breakfast').classList.add('active');
        document.getElementById('lunch').classList.remove('active');
        document.getElementById('dinner').classList.remove('active');
    }



    const handleLunch = () => {

        const FindingFood = Food.filter(fd => fd.category === 'Lunch');

        setCurrentFood(FindingFood);

        document.getElementById('breakfast').classList.remove('active');
        document.getElementById('lunch').classList.add('active');
        document.getElementById('dinner').classList.remove('active');

    }

    const handleDinner = () => {
        const FindingFood = Food.filter(fd => fd.category === 'Dinner');
        setCurrentFood();
        setCurrentFood(FindingFood);


        document.getElementById('breakfast').classList.remove('active');
        document.getElementById('lunch').classList.remove('active');
        document.getElementById('dinner').classList.add('active');
    }

    return (
        <div className="container">
            <div className="text-center my-5">
                <span id="breakfast" onClick={handleBreakfast} className="time" >Breakfast</span>
                <span id="lunch" onClick={handleLunch} className="time">Lunch</span>
                <span id="dinner" onClick={handleDinner} className="time">Dinner</span>

            </div>

            <div className="row  food-item">
                {
                  

                    currentFood.map(food => <Foods
                            id={food.id}
                            food={food}    
                            ></Foods>)
                }
            </div>
            <div className="text-center">
                {cart.length >= 1 ?

                    <Link to='/cart'>  <button className="btn btn-danger">Check out your cart</button> </Link>
                    : <button disabled className="btn btn-danger">Check out your cart</button>
                }
            </div>
        </div>
    );
};

export default Content;