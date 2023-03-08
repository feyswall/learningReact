import React, { Component } from 'react';

// stateless Functional conponent
const Navigation = ({ count }) => {
    console.log("Navigation rendered");
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar {count}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    </div>
                </div>
            </nav>
        );
}

export default Navigation;