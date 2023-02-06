import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 1,
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
    
    handleIncement = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

  render() {
    return (
      <React.Fragment>
        <div className="container m-4">
          <span className={this.getBadgeClasses()}>
            <b>{this.formatCount()}</b>
          </span>
          <button onClick={ this.handleIncement } className="btn btn-primary">increment</button>
            { this.renderTagsHelper() }
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
