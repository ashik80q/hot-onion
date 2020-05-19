import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Componen/Header/Header';
import Banner from './Componen/Header/Banner/Banner';
import Product from './Componen/Header/Product/Product';
import ChooseUs from './Componen/ChooseUs/ChooseUs';
import TopFooter from './Componen/TopFooter/TopFooter';
import Footer from './Componen/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Banner></Banner>
    <Product></Product>
    <ChooseUs></ChooseUs>
    <TopFooter></TopFooter>
    <Footer></Footer>

    </div>
  );
}

export default App;
