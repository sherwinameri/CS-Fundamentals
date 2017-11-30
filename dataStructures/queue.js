// queue class
class Queue {

  constructor() {
    this.items = [];
  }

  // push pop peek
  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    this.items.shift();
  }

  getFirst() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

}

// queue instance
var newQueue = new Queue();

// starts running methods
newQueue.enqueue("Jerome Farley");
newQueue.enqueue("Garrett");
newQueue.enqueue("Chi");

console.log(newQueue.getFirst());
