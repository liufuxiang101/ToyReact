// 元素类
class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }

  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }

  appendChild(component) {
    this.root.appendChild(component.root);
  }
}

// 文本类
class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}

// 组件类，所有自定义组件继承自它，作用类似 React.Component
export class Component {
  constructor() {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
  }

  setAttribute(name, value) {
    this.props[name] = value;
  }

  appendChild(component) {
    this.children.push(component);
  }

  // 组件 render 函数会获取 root 属性，触发递归调用，构建完整 DOM，深度优先
  get root() {
    if (!this._root) {
      this._root = this.render().root;
    }

    return this._root;
  }
}

export function createElement(type, attributes, ...children) {
  let e;

  if (typeof type === "string") {
    // DOM 元素，直接创建
    e = new ElementWrapper(type);
  } else {
    // 实例化自定义组件
    e = new type();
  }

  // 设置属性
  for (let p in attributes) {
    e.setAttribute(p, attributes[p]);
  }

  // 递归调用，构建完整 DOM
  let insertChildren = (children) => {
    for (let child of children) {
      if (typeof child === "string") {
        child = new TextWrapper(child);
      }

      if (typeof child === "object" && child instanceof Array) {
        insertChildren(child);
      } else {
        e.appendChild(child);
      }
    }
  };
  insertChildren(children);

  return e;
}

export function render(component, parentElement) {
  parentElement.appendChild(component.root);
}
