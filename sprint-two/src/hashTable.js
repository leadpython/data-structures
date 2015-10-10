

var HashTable = function() {
  this._size = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  

};

HashTable.prototype.getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

HashTable.prototype.insert = function(k, v) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  
  //we have index 0
 
  var insideArray = [k , v];
  
  //check index at storage is empty
  if(this._storage.get(index) === undefined){
    //create an array
    var newArray = [];
    //push the node inside array
    newArray.push(insideArray);
    //set the index at storage to be [ [ k, v ] ]
    this._storage.set(index, newArray);

  }
  //[ [ [k, v] ]  ]
  else{

    var set = this._storage.get(index);   //[ [k,v],  ]
    
    //check if the set[i][0] === k
      //set[i][1] = v
    
    if (this.retrieve(k) === false){
      set.push(insideArray);
      this._storage.set(set);
      

    }

    else {
      //i = where k is that is duplicated
      for (var i = 0; i < set.length; i++) {
        if (set[i][0] === k) {
          set[i][1] = v;
          this._size--;
        }
      }
    }

  }
  //storage--> [ [ [k, v ]  ]     get    ]
  // check if in the 0 index array, there is something
    //if nothing
        // push an array [k, v]
       //[ [ [k, v] ]  ]

  //[ [k,v]  ] index 0
  //[a,b ]  --> [ [ [k,v] , [a,b] , [] ]  ] index 0
  this._size++;
  console.log(this._size);

  if (this._size > this._limit * 0.75) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  var set = this._storage.get(index); //[ [k,v]  ]

  if(set !== undefined){
    for (var i = 0; i < set.length; i++) {
      if (set[i][0] === k) {
        return set[i][1];
      }
    }
  }
  return null;


  

};

HashTable.prototype.remove = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
 
  var set = this._storage.get(index);   // [ [k, v],  undefined  , [c, d] , [a, b] ]
  if (set !== undefined) {
    for (var i = 0; i < set.length; i++) {
      if (set[i][0] === k) {
        set.splice(i, 1); 
      }
    }
  }
  
  this._size--;

  if (this._size < this._limit * 0.25) {
      this.resize(Math.floor(this._limit * 0.5));
    }
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;
  this._storage = LimitedArray(newLimit);
  this._limit = newLimit;

  

  oldStorage.each.bind(this, function(element){
    if(element !== undefined){
      for(var i = 0; i < element.length; i++){
        this.insert(element[i][0], element[i][1]);
      }
    }

  });


};

/*
 * Complexity: What is the time complexity of the above functions?
 */


