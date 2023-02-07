import React, { Component } from 'react';
import Counter from './Counter';


class Counters extends Component {
    state = { 
        counters: [
            { id: 0, value: 1 },
            { id: 0, value: 1},
            { id: 0, value: 1},
            { id: 0, value: 1},
            { id: 0, value: 1},
        ],
     } 
    render() { 
        return (
            <div>
               { this.state.counters.map(elem =>  <Counter key={Counter.id} /> ) }
            </div>
        );
    }
}
 
export default Counters;