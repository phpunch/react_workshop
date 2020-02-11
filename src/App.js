import React, { Component } from 'react';
import Home from "./containers/Home"
import Navbar from './components/Navbar'
import Calculator from './containers/Calculator'
import CalculatorWithProps from './containers/CalculatorWithProps'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* <Switch> จะดูตาม <Route> ตั้งแต่อันแรก
         ถ้า path ตรงกันก็จะส่ง component นั้นมาเลย */}
        <Switch>
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
      </Router>
    );
  }
}

export default App;
