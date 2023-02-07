import React, { Component } from 'react';

class Navigation extends Component {
    render() { 
        return (
       <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar { this.props.count}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            </div>
        </div>
        </nav>
        );
    }
}
export default Navigation;