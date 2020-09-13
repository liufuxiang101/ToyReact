import { createElement, Component, render } from "./toy-react";

class MyComponent extends Component {
  constructor() {
    super();

    this.state = {
      a: 1,
      b: 2,
    };
  }

  render() {
    return (
      <div>
        <h1>my component</h1>
        <button
          onclick={() => {
            this.setState({
              a: this.state.a + 1,
              b: this.state.b + 1,
            });
          }}
        >
          Add
        </button>
        <span>{this.state.a.toString()}</span>
        <span>{this.state.b.toString()}</span>
      </div>
    );
  }
}

render(
  <MyComponent id="MyComponent" class="my-component"></MyComponent>,
  document.body
);
