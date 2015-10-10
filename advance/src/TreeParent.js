var TreeParent = function(value) {
  this.value = value;
  this.parent = null;
  this.children = [];
};

TreeParent.prototype.addChild = function(value){
  var treeP = new TreeParent(value);
  treeP.parent = this;
  this.children.push(treeP);
};

TreeParent.prototype.contains = function(target, node){
  node = node === undefined ? this : node;
  var doesItContain = false;
  if (node.value === target) {
    doesItContain = true;
  } else {
    if (node.children.length === 0){
      return false;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        doesItContain = node.contains(target, node.children[i]);
        if (doesItContain === true) {
          break;
        }
      }
    }
  }
  return doesItContain;

};

TreeParent.prototype.removeFromParent = function(){
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.value === this.parent.children[i].value) {
      this.parent.children.splice(i, 1);
    }
  }
};


TreeParent.prototype.traverse = function(cb, node){
  node = node === undefined ? this : node;
  cb(node);
  if (node.children.length !== 0) {
    for (var i = 0; i < node.children.length; i++) {
      node.traverse(cb, node.children[i]);
    }
  }


};


