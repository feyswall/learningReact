import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 4 },
      { id: 3, value: 1 },
      { id: 4, value: 3 },
      { id: 5, value: -1 },
    ],
};
    
    
  handleDelete = (counter) =>  {
    let CopyCounter = this.state.counters;
      let filteredCounters = CopyCounter.filter(elem => elem.id != counter.id);
      this.setState({ counters: filteredCounters });

  }


  render() {
    return (
      <div>
            {this.state.counters.map( counter  => (
                <Counter
                    key={counter.id}
                    value={counter.value}
                    handleDelete={this.handleDelete}
                    counter={ counter }
            / >
        ))}
      </div>
    );
  }
}

export default Counters;
