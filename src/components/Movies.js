import React, { Component } from "react";
import { getMovies } from '../services/faceServices';
import { getMovie } from '../services/faceServices';
class Movies extends Component {

    state = {
        movieLists: getMovies()
    }

    // The concept is that, when you have this kind of situation you should
    // always remember that you can't edit element directly in react
    deleteMovie = (id) => {
        let movie = this.state.movieLists.filter(element => element._id !== id);
        this.setState({
            movieLists: movie
        })
    } 


    listMovies = () => {
        return this.state.movieLists.map(movie => {
            return <tr key={movie._id}>
                <th></th>
                <td>{ movie.title }</td>
                <td>{ movie.phone }</td>
                <td>{ movie.numberInStock }</td>
                <td>{ movie.registered }</td>
                    <td>
                    <button className="btn btn-danger btn-sm" onClick={() => { this.deleteMovie(movie._id) } }>delete</button>
                    </td>
            </tr>
        });
    }

  render() {
    return (
      <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Tittle</th>
                <th scope="col">Phone</th>
                    <th scope="col">Number In Stock</th>
                    <th>Registered In</th>
                    <th></th>
            </tr>
            </thead>
            <tbody>
            { this.listMovies() }
        </tbody>
      </table>
    );
  }
}

export default Movies;
