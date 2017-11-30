// stacklife
class Stack {

  constructor() {
    this.items = [];
  }

  // push pop peek
  push(element) {
    this.items.push(element);
  }

  pop(element) {
    this.items.pop(element);
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

}

// stack instance
var newStack = new Stack();

// running methods
newStack.push(1);
newStack.push(2);
newStack.push(4);

console.log(newStack.peek());
