import React, { Component } from 'react';
import '../../src/css/one-page-wonder.css';

export default class topheader extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/">Reactjs Training</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/Register">Sign Up</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Signin">Log In</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

