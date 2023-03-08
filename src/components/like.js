import React, { Component } from 'react';

class Like extends Component {
    state = { 
        movie: '',
        movieLiked: false
    } 
    constructor(props) {
        super(props);
        this.state.movie = this.props.movie;
    }
    componentDidMount() {
        console.log( this.state.movie );
    }

    handleClick = () => {
        this.setState({
            movieLiked: !this.state.movieLiked
        });
    }
    
    handleLikeClass = () => {
        return this.state.movieLiked ? "fa fa-heart" : "fa fa-heart-o";
    }

    render() { ;
        return (
            <i onClick={ this.handleClick } class={ this.handleLikeClass() } aria-hidden="true"></i>
        );
    }
}
 
export default Like;