import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    return (
        <div className="container m-2">
            <button className="btn btn-primary" onClick={this.props.handleReset}>reset</button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
                handleDelete={() => this.props.handleDelete(counter)}
                handleIncement={() => this.props.handleIncement(counter)}
                handleDecrement={() => this.props.handleDecrement(counter)}
            counter={counter}
            formatCount={this.props.formatCount}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
