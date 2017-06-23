var LinkedList = function() {
  this.head = null;

  this.add = function(node) {
    if(this.head === null) {
      this.head = node;
    }
    else {
      var current = this.head;
      while(current.getNext() !== null) {
        current = current.getNext();
      }
      current.next = node;
    }
    return this;
  }

  this.printList = function() {
    var current = this.head;
    while(current !== null) {
      console.log(current.getVal());
      current = current.getNext();
    }
  }

  this.getFirst = function() {
    return this.head;
  }

  this.isEmpty = function() {
    return this.head === null;
  }
}

var LLNode = function(val) {
  this.val = val;
  this.next = null;

  this.getVal = function() {
    return this.val;
  }

  this.getNext = function() {
    return this.next;
  }

  this.setNext = function(node) {
    this.next = node;
  }
}


var Stack = function() {
  this.list = new LinkedList();
  this.size = 0;

  this.push = function(item) {
    var node = new LLNode(item);
    if(this.list.isEmpty()) {
      this.list.add(node);
    }
    else {
      node.setNext(this.list.head);
      this.list.head = node;
    }
    this.size++;
    return this;
  }

  this.pop = function() {
    if(this.size === 0) {
      console.log('Stack is currently empty.');
      return;
    }
    var item = this.list.getFirst().getVal();
    this.list.head = this.list.head.getNext();
    this.size--;
    return item;
  }

  this.getSize = function() {
    return this.size;
  }
}

var Queue = function() {
  this.list = new LinkedList();
  this.first = this.list.getFirst();
  this.last = null;
  this.size = 0;

  this.enqueue = function(item) {
    var node = new LLNode(item);
    // if this is the first item, it is the first and last
    if(this.first === null) {
      this.first = node;
      this.last = node;
    }
    else {
      var oldLast = this.last;
      oldLast.next = node;
      this.last = node;
    }
    this.size++;
  }

  this.dequeue = function() {
    if(this.size === 0) {
      console.log('Queue is currently empty.');
      return;
    }
    var item = this.first.val;
    this.first = this.first.next;
    this.size = this.size--;
    return item;
  }

  this.getSize = function() {
    return this.size;
  }
}



//******************************************************************************

// var stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.getSize());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
