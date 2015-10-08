var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me


  extend(newTree, treeMethods);

  return newTree;
};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  
  //var node = Object.create(Tree);
  //this.children.push()
  this.children.push(Tree(value));

  
};

treeMethods.contains = function(target) {
  var doesItContain = false;

  var checkTarget = function(nodeTree) {
    if (nodeTree.value === target) {
      doesItContain = true;
    } else {
      for (var i = 0; i < nodeTree.children.length; i++) {
        checkTarget(nodeTree.children[i]);
      }
    }
  };
  checkTarget(this);
  return doesItContain;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
