var DoubleLinkedList = function(){

  this.head = null;
  this.tail = null;

};

DoubleLinkedList.prototype.addToTail = function(value, node){  

  if(this.head === null) {
    var newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
  } else {
    node = node === undefined ? this.head : node;
    if(node.next === null){
      var newNode = new Node(value);
      newNode.previous = node;
      node.next = newNode;
      this.tail = newNode;
    } else {
      this.addToTail(value, node.next);
    }
  }

};

DoubleLinkedList.prototype.addHead = function(value){
  var node = new Node(value);
};

DoubleLinkedList.prototype.removeHead = function(){
  if (this.head.next === null) {
    var previousValue = this.head.value;
    this.head = null;
    return previousValue;
  } else {
    var next = this.head.next;
    var previousHeadValue = this.head.value;
    delete this.head;
    this.head = next;
    this.head.previous = null;
    return previousHeadValue;
  }
  
};

DoubleLinkedList.prototype.removeTail = function(){
  var previous = this.tail.previous;
  delete this.tail;
  this.tail = previous;
  this.tail.next = null;
};

DoubleLinkedList.prototype.contains = function(target, node){
  
  node = node === undefined ? this.head : node;
  var checkContains = false;
  if (node.value === target) {
    checkContains = true;
  } else {
    if (node.next !== null) {
      checkContains = this.contains(target, node.next);
    } 
  }

  return checkContains;
};


var Node = function(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
};
