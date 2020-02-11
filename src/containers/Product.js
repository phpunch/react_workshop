import React, { Component } from 'react';
import axios from 'axios'
import Card from '../components/Card/Card'
class Product extends Component {
    state = {
        name: "",
        price: "",
        products: null
    }

    textInputHandler = (event, type) => {
        this.setState({
            [type]: event.target.value
        })
    }

    componentDidMount = async () => {
        try {
            const res = await axios.get("http://103.74.254.140/api/product")
            this.setState({
                products: res.data
            })
        } catch (error) {
            console.log("ERROR")
            console.log(error)
        }
    }

    fetchData = async () => {
        const res = await axios.get("http://103.74.254.140/api/product")
        this.setState({
            products: res.data
        })
    }

    createProductHandler = async () => {
        try {
            const formData = {
                name: this.state.name,
                price: this.state.price
            }
            console.log(formData)
            const res = await axios.post("http://103.74.254.140/api/product", formData)
            console.log(res.data)
            this.fetchData()

        } catch (error) {
            console.log(error)
        }
    }

    deleteProductHandler = async (id) => {
        try {
            const res = await axios.delete(`http://103.74.254.140/api/product/${id}`)
            console.log(res)
            this.fetchData()
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        var products = <p>Loading...</p>
        if (this.state.products) {
            products = this.state.products.map(element => {
                return (
                    <Card key={element['created_at']}
                        id={element['id']}
                        name={element['name']}
                        price={element['price']}
                        updated_at={element['updated_at']}
                        created_at={element['created_at']}
                        delete={() => this.deleteProductHandler(element['id'])} />
                )
            })
        }

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
                <button type="button" className="btn btn-secondary" onClick={this.createProductHandler}>Create</button>
                {products}
            </div>
        );
    }
}

export default Product;
