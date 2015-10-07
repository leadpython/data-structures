var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.length = 0;
  //Stack.methods = stackMethods;
  extend(storage, stackMethods);


  

  return storage;
};

var extend = function(to, from)
  {
    for(var key in from)
    {
      to[key] = from[key];
    }
};

var stackMethods = {

  pop: function(){
    if (this.length > 0) {
      this.length--;
    }
    var result = this[this.length];
    delete this[this.length];
    return result;
  },
  push: function(value){
    this[this.length] = value;
    this.length++;

  },
  size: function(){
    return this.length;
  }

};


