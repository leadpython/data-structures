var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    var key = length;
    storage[key] = value;
    length++;
  };

  someInstance.pop = function() {
    if (length > 0) {
      length--;
    }
    var key = length;
    var result = storage[key];
    delete storage[key];
    return result;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};