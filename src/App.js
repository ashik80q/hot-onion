import React, {  } from 'react';
import './App.css';
import Header from './Componen/Header/Header';
import Banner from './Componen/Banner/Banner';
import ChooseUs from './Componen/ChooseUs/ChooseUs';
import TopFooter from './Componen/TopFooter/TopFooter';
import Footer from './Componen/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Content from './Componen/Content/Content';
import SingleFood from './Componen/SingleFood/SingleFood';
import Login from './Componen/Login/Login';

import Cart from './Componen/Cart/Cart';
import Checkout from './Componen/Checkout/Checkout';
import { PrivateRoute, AuthProvider } from './Componen/UseAuth/UseAuth';
import Profile from './Componen/Profile/Profile';





function App() {

  
  return (
    <div className="App">
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header ></Header>
            <Banner></Banner>
            <Content ></Content>
            <ChooseUs></ChooseUs>
            <TopFooter></TopFooter>
            <Footer></Footer>

          </Route>

          <Route path="/food/:id">
            <Header ></Header>
            <SingleFood ></SingleFood>
          </Route>

          <Route path="/login"> 
            <Header ></Header>
            <Login></Login>
          </Route>

          <PrivateRoute path="/cart">
             <Header ></Header>
             <Cart></Cart>
          </PrivateRoute>

          <Route path="/checkout">
            <Header ></Header>
            <Checkout></Checkout>
          </Route>

          <Route path="/profile">
            <Header ></Header>
            <Profile></Profile>
          </Route>
        
        </Switch>

      
       </Router>


    </AuthProvider> 

    </div>
  );
}

export default App;
