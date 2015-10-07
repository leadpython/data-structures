var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
};
Queue.prototype.dequeue = function() {
  if (this.length > 0) {
    this.length--;
  }
  var result = this[0];
  delete this[0];

  for (var i = 0; i < this.size(); i++) {
    this[i] = this[i+1];
    delete this[i+1];
  }

  return result;
};
Queue.prototype.size = function() {
  return this.length;
}


