import React, { Component } from 'react';
import Home from "./containers/Home"
import Navbar from './components/Navbar'
import Calculator from './containers/Calculator'
import CalculatorWithProps from './containers/CalculatorWithProps'
import Product from './containers/Product'
import EditProduct from './containers/EditProduct'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          {/* <Switch> จะดูตาม <Route> ตั้งแต่อันแรก
              ถ้า path ตรงกันก็จะส่ง component นั้นมาเลย */}
          <Switch>
            <Route path="/product/edit/:id">
              <EditProduct />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/calculatorwithprops">
              <CalculatorWithProps />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
