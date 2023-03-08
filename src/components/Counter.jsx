import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProp, prevState) {
    console.log("prev prop", prevProp);
    console.log("prev state", prevState);
    if (prevProp.counter.value == this.props.counter.value) {
      // make the bloody ajax call
    }
  }

  componentWillUnmount() {
    console.log("Counter Unmount");
  }

  getBadgeClasses = () => {
    let classes = "m-4 badge badge-";
    classes += this.props.counter.value <= 0 ? "danger" : "warning";
    return classes;
  };

  disableDecrement = () => {
    let classes = "";
    if (this.props.counter.value <= 0) {
      classes += "disabled";
    }
    return classes;
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row justify-content-start align-items-center">
            {/* This is highly used in complex elements eg dialog box */}
            <div className="col-2">
              <span className={this.getBadgeClasses()}>
                <b>{this.props.formatCount(this.props.counter)}</b>
              </span>
            </div>
            <div className="col-8">
              <button
                onClick={() => this.props.handleIncement(this.props.counter)}
                className="btn btn-primary"
              >
                +
              </button>
              <button
                onClick={() => this.props.handleDecrement(this.props.counter)}
                className="btn btn-dark ml-1"
                disabled={this.disableDecrement() }
              >
                -
              </button>
              <button
                onClick={() => this.props.handleDelete(this.props.counter)}
                className="btn btn-danger ml-1"
              >
                x
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;

/** ADD REACT DEVELOPER EXTENSION IN YOUR BROWSER FOR BETTER RESULTS */


/** Differences btn props and state are props are immutable while 
 * state are mutable also props come from outside a class while state
 * is private withing a class
 */