import React, {Component} from 'react';
import Home from "./containers/Home"
import Navbar from './components/Navbar'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
