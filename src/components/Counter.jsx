import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          {/* This is highly used in complex elements eg dialog box */}
          <span className={this.getBadgeClasses()}>
            <b>{this.props.formatCount(this.props.counter)}</b>
          </span>
          <button
            onClick={() => this.props.handleIncement(this.props.counter)}
            className="btn btn-primary"
          >
            increment
          </button>
          <button
            onClick={() => this.props.handleDecrement(this.props.counter)}
            className="btn btn-dark ml-1"
          >
            increment
          </button>
          <button
            onClick={() => this.props.handleDelete(this.props.counter)}
            className="btn btn-danger ml-1"
          >
            delete
          </button>
        </div>
      </React.Fragment>
    );
  }


  getBadgeClasses() {
    let classes = "m-4 badge badge-";
    classes += ((this.props.counter.value) <= 0 ) ? "danger" : "warning";
    return classes;
  }

}

export default Counter;

/** ADD REACT DEVELOPER EXTENSION IN YOUR BROWSER FOR BETTER RESULTS */


/** Differences btn props and state are props are immutable while 
 * state are mutable also props come from outside a class while state
 * is private withing a class
 */