import React from 'react'
//import ReactDOM from 'react-dom';

import Home from './pages/Home'
import Product from "./pages/Product";
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { BrowserRouter as Router,Switch,Route,} from "react-router-dom";


function  App () {
  //const user = true ;
  return (

   //<div><Product/></div>
   <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          

          <Route path="/products/:category" component={ProductList}/>
             
          

          <Route path="/product/:id"  component={Product}/>
          

          <Route path="/cart" component={Cart}/>
          

          <Route path="/login" component={Login}/>
          <Route path="/register" component ={Register}/>
          
      </Switch>
   </Router>
  )
}

export default App