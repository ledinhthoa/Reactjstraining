import React, { Component } from 'react';
import '../../src/css/one-page-wonder.css';
class header extends Component {
    render() {
        return (
            <div>
                <header className="masthead text-center text-white">
                    <div className="masthead-content">
                        <div className="container">
                            <h1 className="masthead-heading mb-0">Reactjs training</h1>
                            <h2 className="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
                            <a href="/" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
                        </div>
                    </div>
                    <div className="bg-circle-1 bg-circle" />
                    <div className="bg-circle-2 bg-circle" />
                    <div className="bg-circle-3 bg-circle" />
                    <div className="bg-circle-4 bg-circle" />
                </header>
            </div>
        );
    }
}

export default header;