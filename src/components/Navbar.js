import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/calculator">
                                calculator
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/calculatorwithprops">
                                calculatorwithprops
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">
                                product
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;