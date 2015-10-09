

// ------------------------
// Instantiate a new graph
var Graph = function() {
  
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  //create node from the node value
  var graphNode = {};
  this[node] = graphNode;


};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var doesItContain = false;
  for (var key in this) {
    if (Number(key) === node){
      doesItContain = true;
    }
  }
  return doesItContain;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this) {
    if (Number(key) === node) {
      delete this[key];
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var doesItContain = false;
  for(var key in this[fromNode]){
    if(Number(key) === toNode){
      doesItContain = true;
    }
  }
  return doesItContain;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode][toNode] = this[toNode];
  this[toNode][fromNode] = this[fromNode];
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[fromNode][toNode];
  delete this[toNode][fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var key in this){

    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


