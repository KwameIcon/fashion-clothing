import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.component";

function App () {

  return (
    <Routes>
      <Route exact path= {'/'} Component={Homepage}/>
      <Route path= {'/shop'} Component={ShopPage}/>
    </Routes>
    
  )
}

export default App