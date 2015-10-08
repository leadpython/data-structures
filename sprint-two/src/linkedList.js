var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
  
     if(list.head === null){
      list.head = node;
      list.tail = node;
    }
 
    else{
      var checkIfNextIsNull = function(listNode) {
        if (listNode.next === null) {
          listNode.next = node;
          list.tail = node;
        } else {
          checkIfNextIsNull(listNode.next);

        }
      };
      checkIfNextIsNull(list.head);
    }
  }

  list.removeHead = function() {
    var result = list.head;
    list.head = list.head.next;
    return result.value;
  };

  list.contains = function(target) {
    var doesItContain = false;
    var checkValue = function(node) {
      if (node.value === target) {
        doesItContain = true;
      } else {
        if (node.next !== null) {
          checkValue(node.next);
        }
      }
    };
    checkValue(list.head);
    return doesItContain;
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