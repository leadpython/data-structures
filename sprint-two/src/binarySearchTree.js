var BinarySearchTree = function(value) {

  var binaryTree = Object.create(BinarySearchTree.prototype);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;

  return binaryTree;
};

BinarySearchTree.prototype.insert = function(newVal){

  var findLeftOrRight = function(node){

    if(newVal < node.value) {
      if(node.left === null){
        node.left = new BinarySearchTree(newVal);
      }
      else{
        findLeftOrRight(node.left);
      }

    } else {
      if(node.right === null){
        node.right = new BinarySearchTree(newVal);
      }
      else{
        findLeftOrRight(node.right);
      }
    }
  };

  findLeftOrRight(this);

}

BinarySearchTree.prototype.contains = function(valCon){

  var doesItContain = false;
  var checkValue = function(node) {
    if (node.value === valCon) {
      doesItContain = true;
    } else {
      if (valCon < node.value) {
        if (node.left !== null) {
          checkValue(node.left);
        }
      } else {
        if (node.right !== null) {
          checkValue(node.right);
        }
      }
    }
  };
  checkValue(this);
  return doesItContain;
}

BinarySearchTree.prototype.depthFirstLog = function(cb){
  var callBack = function(node) {
    cb(node.value);
    if (node.left !== null) {
      callBack(node.left);
    }
    if (node.right !== null) {
      callBack(node.right);
    }
  };
  callBack(this);
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
