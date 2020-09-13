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
        <span>{this.state.a.toString()}</span>
        {this.children}
      </div>
    );
  }
}

render(
  <MyComponent id="MyComponent" class="my-component">
    <div>abc</div>
    <div>
      <div>123</div>
    </div>
  </MyComponent>,
  document.body
);
