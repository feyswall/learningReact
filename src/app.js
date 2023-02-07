import React, { Component } from 'react';
import Counters from './components/Counters';
import Navigation from './components/Navigation';


class App extends Component {
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
    return elem.value > 0 ? elem.value : `zero ${elem.value}`;
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

    handleReset = () => {
        let copyCounters = [...this.state.counters];
        console.log(copyCounters);
        for (let g = 0; g < copyCounters.length; g++){
            let objectCopy = { ...copyCounters[g] };
            objectCopy.value = 0;
            copyCounters[g] = objectCopy;
        }
        this.setState({ counters: copyCounters });
    }
    render() { 
        return (
            <React.Fragment>
                <Navigation count={ this.state.counters.filter(elem => elem.value > 0).length} />
                <main className='container'>
                    <Counters
                        handleDecrement={this.handleDecrement}
                        handleIncement={this.handleIncement}
                        handleDelete={this.handleDelete}
                        handleReset={this.handleReset}
                        counters={this.state.counters}
                        formatCount={this.formatCount}
                    />
                </main>
            </React.Fragment>
        );
    }
}
 
export default App;