import { Component } from "react";

class ContentClass extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <h3>{this.state.counter}</h3>
        <button onClick={this.decrement}>-</button>{"  "}
        <button onClick={() => this.increment()}>+</button>
      </div>
    )
  }
}

export default ContentClass;