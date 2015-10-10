var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  var doesItContain = false;
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      doesItContain = true;
    }
  }
  return doesItContain;
};

setPrototype.remove = function(item) {
  // var target = 0;
  // for (var i = 0; i < this._storage.length; i++) {
  //   if (this._storage[i] === item) {
  //     target = i;
  //   }
  // }
  // for (var i = target; i < this._storage.length; i++) {
  //   this._storage[i] = this._storage[i+1];
  // }
  // this._storage.pop();

  for(var i = 0; i < this._storage.length; i++){
    if(this._storage[i] === item){
      this._storage.splice(i, 1);
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
