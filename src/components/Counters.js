import React, { Component } from 'react';
import Counter from './Counter';


class Counters extends Component {
    state = { 
        counters: [
            { id: 0, value: 3 },
            { id: 0, value: 4},
            { id: 0, value: 1},
            { id: 0, value: 3},
            { id: 0, value: -1},
        ],
     } 
    render() { 
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} value={counter.value} selected="true" />
                )}
            </div>
        );
    }
}
 
export default Counters;