import React, { Component } from "react";

class Counter extends Component {
    state = {
        counter: 0,
        image: "https://picsum.photos/500"
    }
    render() {
        let classes = "text-";
        classes += this.state.counter == 0 ? "warning" : "success";
        return (
        <React.Fragment>
                <div className="container m-4">
                    <span className={classes}>
                        {this.formatCount()}
                </span>
                <button className="btn btn-primary">increment</button>
            </div>
        </React.Fragment>
        );
    }

    formatCount() {
        let { counter } = this.state;
        return counter === 0 ? "Zero" : counter;
    }
}

export default Counter;
