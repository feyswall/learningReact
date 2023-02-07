import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: this.props.value,
    image: "https://picsum.photos/500",
    tags: ["tag1"],
    };
    
    renderTagsHelper() {
        if (this.state.tags.length > 0) {
             return <ul>
                {this.state.tags.map((tag) => {
                  return <li key={tag}>{tag}</li>;
                })}
              </ul>;
        };
        return (
          <div>
            <span className="text-danger">No tags found in here</span>
          </div>
        );
    }
    
    handleIncement = (value) => {
        console.log( value )
        this.setState({
            counter: this.state.counter + 1,
        })
    }

  render() {
    console.log( this.props );
    return (
      <React.Fragment>
        <div className="container">
          {/* This is highly used in complex elements eg dialog box */}
          <span className={this.getBadgeClasses()}>
            <b>{this.formatCount()}</b>
          </span>
          <button
            onClick={() => {
              this.handleIncement("4");
            }}
            className="btn btn-primary"
          >
            increment
          </button>
          <button
            onClick={ this.props.handleDelete }
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
    classes += this.state.counter == 0 ? "warning" : "success";
    return classes;
  }

  formatCount() {
    let { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}

export default Counter;

/** ADD REACT DEVELOPER EXTENSION IN YOUR BROWSER FOR BETTER RESULTS */


/** Differences btn props and state are props are immutable while 
 * state are mutable also props come from outside a class while state
 * is private withing a class
 */