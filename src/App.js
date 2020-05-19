import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Componen/Header/Header';
import Banner from './Componen/Header/Banner/Banner';
import Product from './Componen/Header/Product/Product';
import ChooseUs from './Componen/ChooseUs/ChooseUs';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Banner></Banner>
    <Product></Product>
    <ChooseUs></ChooseUs>

    </div>
  );
}

export default App;
