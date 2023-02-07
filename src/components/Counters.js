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

  handleDelete = (counter) => {
    let CopyCounter = this.state.counters;
    let filteredCounters = CopyCounter.filter((elem) => elem.id != counter.id);
    this.setState({ counters: filteredCounters });
  };

  formatCount = (counter) => {
    let { counters } = this.state;
    let copyCounters = counters;
    let elem = copyCounters.find((elem) => elem.id == counter.id);
    return elem.value > 0 ? elem.value : "zero";
  };

    handleIncement = (counter) => {
        let copyCounters = [...this.state.counters];
        let index = copyCounters.indexOf(counter);
        copyCounters[index] = {...counter}
        copyCounters[index].value += 1;
        this.setState({
            counters: copyCounters
        })
    }
    

    handleDecrement = (counter) => {
        let { counters } = this.state;
        let copyCounters = counters;
        for (var g = 0; g < copyCounters.length; g++) {
            let lastCopy = copyCounters[g];
            if (counter.id == lastCopy.id) {
                lastCopy.value -= 1;
            }
            copyCounters[g] = lastCopy;
        }
        this.setState({
            counters: copyCounters
        })
    }

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
                handleDelete={this.handleDelete}
                handleIncement={this.handleIncement}
                handleDecrement={this.handleDecrement}
            counter={counter}
            formatCount={this.formatCount}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
