import React, { Component } from 'react';
import Box from '../components/Box/Box'

class CalculatorWithProps extends Component {
  state = {
    number: 0,
    count: 0,
    saved_numbers: []
  }

  addNumberHandler = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  minusNumberHandler = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  saveHandler = () => {
    var saved_numbers = [...this.state.saved_numbers] // copy list
    saved_numbers.push({ id: this.state.count, number: this.state.number })
    this.setState({
      count: this.state.count + 1,
      saved_numbers: saved_numbers,
    })
  }

  deleteNumber = (number) => {
    const data = this.state.saved_numbers.filter(i => i.id !== number.id)
    this.setState({
      saved_numbers: data
    })
  }

  render() {
    const numbers = this.state.saved_numbers.map((element, index) => {
      return (
        <Box key={index}
          class="list-group-item"
          delete={() => this.deleteNumber(element)}>
            id: {element.id}, number: {element.number}
        </Box>
      )
    })

    return (
      <div>
        {this.state.number}

        <div>
          <button type="button" className="btn btn-primary" onClick={this.addNumberHandler}>+ 1</button>
          <button type="button" className="btn btn-primary" onClick={this.minusNumberHandler}>- 1</button>
          <button type="button" className="btn btn-secondary" onClick={this.saveHandler}>Save</button>
        </div>
        <ul class="list-group">
          {numbers}
        </ul>

      </div>
    );
  }
}

export default CalculatorWithProps;
