import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 1,
    image: "https://picsum.photos/500",
    tags: ["tag1", "tag2", "tag3"],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container m-4">
          <span className={this.getBadgeClasses()}>
            <b>{this.formatCount()}</b>
          </span>
          <button className="btn btn-primary">increment</button>
        <ul>
                    {this.state.tags.map( tag => {
                        return <li key={tag}>{tag}</li>
                    })}           
        </ul>
            </div>
        
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "p-4 text-";
    classes += this.state.counter == 0 ? "warning" : "success";
    return classes;
  }

  formatCount() {
    let { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}

export default Counter;
