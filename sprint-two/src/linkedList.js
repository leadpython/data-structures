var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    list[JSON.stringify(node)] = node;
    //create node
    // list[nodekey] = node


    //check if list.head is null
      //list.head = node
    if(list.head === null){
      list.head = list[JSON.stringify(node)];

    }
    else{
      var next = list.head;
      while (list[JSON.stringify(node)].next !== null) {
        next = list[JSON.stringify(node)].next = node;
      }
    }


    //check if next is null
      //next = node
      //list.tail = node


      // {head: {value:, next: {value:, next: {value:, next: null}}}, tail: {value, next: null}




  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */