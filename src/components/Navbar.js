import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">
                                Home 
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/calculator">
                                calculator
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/calculatorwithprops">
                                calculatorwithprops
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;