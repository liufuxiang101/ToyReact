function createElement(tagName, attributes, ...children) {
  let e = document.createElement(tagName);

  for (let p in attributes) {
    e.setAttribute(p, attributes[p]);
  }

  for (let child of children) {
    if (typeof child === "string") {
      child = document.createTextNode(child);
    }

    e.appendChild(child);
  }

  return e;
}

document.body.appendChild(
  <div id="MyComponent" class="my-component">
    <div>abc</div>
    <div>
      <div>123</div>
    </div>
  </div>
);

// document.body.appendChild(
//   createElement(
//     "div",
//     {
//       id: "MyComponent",
//       class: "my-component",
//     },
//     createElement("div", null, "abc"),
//     createElement("div", null, createElement("div", null, "123"))
//   )
// );
