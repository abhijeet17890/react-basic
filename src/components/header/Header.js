import React, { Component } from 'react';
import {Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <header className="ff-header margin-bottom-tiny">
                <div className="all-content">
                    <Link to='/' className="nav-logo no-padding-left" >
                        <img className="show-inline margin-right-fixed" src={require("../../images/logo_ezetap.svg")} />
                    </Link>
                    <input id="nav" type="checkbox" />
                        <label htmlFor="nav"></label>

                        <nav className="ff-nav">
                            <li>
                                <Link to='/' >
                                   Help
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>Pricing</Link>
                            </li>
                            <li>
                                <Link to="/signup"><strong>LOGIN</strong></Link>
                            </li>
                        </nav>
                </div>
            </header>
        );
    }
}

export default Header;


