import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
class EditProduct extends Component {
    state = {
        name: "",
        price: "",
    }



    textInputHandler = (event, type) => {
        this.setState({
            [type]: event.target.value
        })
    }

    componentDidMount = async () => {
        try {
            const res = await axios.get(`http://103.74.254.140/api/product/${this.props.match.params.id}`)
            console.log(res.data)
            this.setState({
                name: res.data.name,
                price: res.data.price
            })
        } catch (error) {
            console.log("ERROR")
            console.log(error)
        }
    }

    updateHandler = async () => {
        try {
            const formData = {
                name: this.state.name,
                price: this.state.price
            }
            console.log(formData)
            const res = await axios.put(`http://103.74.254.140/api/product/${this.props.match.params.id}`, formData)
            console.log(res.data)
            this.props.history.push('/product')

        } catch (error) {
            console.log(error)
        }
    }

    render() {

        return (
            <div>
                <p>Product</p>
                <input
                    onChange={(event) => this.textInputHandler(event, 'name')}
                    value={this.state.name}
                    placeholder="name" />
                <input
                    onChange={(event) => this.textInputHandler(event, 'price')}
                    value={this.state.price}
                    placeholder="price" />
                <button type="button" className="btn btn-secondary" onClick={this.updateHandler}>Update</button>
            </div>
        );
    }
}

export default withRouter(EditProduct);
