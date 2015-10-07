var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.length = 0;
  extend(storage, queueMethods);
  return storage;

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {

  enqueue: function(value){
    this[this.length] = value;
    this.length++; 
  },
  dequeue: function(){
    if(this.length > 0){
      this.length--;
    }
    var result = this[0];
    delete this[0];

    // slides down the keys
    for (var i = 0; i < this.size(); i++) {
      this[i] = this[i+1];
      delete this[i+1];
    }

    return result;

  },
  size: function(){
    return this.length;
  }

};


