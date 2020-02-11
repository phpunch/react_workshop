import React, { Component } from 'react';
import axios from 'axios'

class Auth extends Component {
    state = {
        id: "",
        password: "",
        products: null
    }

    textInputHandler = (event, type) => {
        this.setState({
            [type]: event.target.value
        })
    }

    render() {
       

        return (
            <div>
                Product
                <input
                    onChange={(event) => this.textInputHandler(event, 'id')}
                    value={this.state.id}
                    placeholder="id" />
                <input
                    onChange={(event) => this.textInputHandler(event, 'password')}
                    value={this.state.password}
                    placeholder="password" />
            </div>
        );
    }
}

export default Auth;
