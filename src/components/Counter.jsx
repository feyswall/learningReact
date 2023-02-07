import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
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
            counter: this.state.value + 1,
        })
    }

  render() {
    return (
      <React.Fragment>
        <div className="container m-4">
          <span className={this.getBadgeClasses()}>
            <b>{this.formatCount()}</b>
          </span>
                <button onClick={() => { this.handleIncement('4') } } className="btn btn-primary">increment</button>
            </div>
        
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "m-4 badge badge-";
    classes += this.state.value == 0 ? "warning" : "success";
    return classes;
  }

  formatCount() {
    let { value: counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}

export default Counter;
