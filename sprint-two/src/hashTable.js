

var HashTable = function() {
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
    //set the index at storagte to be [ [ k, v ] ]
    this._storage.set(index, newArray);
       
  }
  //[ [ [k, v] ]  ]
  else{

    var set = this._storage.get(index);   //[ [k,v],  ]
    
    //check if the set[i][0] === k
      //set[i][1] = v
    var checkKey = this.retrieve(k);   //" value "

    if (this.retrieve(k) === false){
      set.push(insideArray);
      this._storage.set(set)
    }

    else {
      //i = where k is that is duplicated
      for (var i = 0; i < set.length; i++) {
        if (set[i][0] === k) {
          set[i][1] = v;
        }
      }
    }


    ;

  }
  //storage--> [ [ [k, v ]  ]         ]
  // check if in the 0 index array, there is something
    //if nothing
        // push an array [k, v]
       //[ [ [k, v] ]  ]

  //[ [k,v]  ] index 0
  //[a,b ]  --> [ [ [k,v] , [a,b] , [] ]  ] index 0
};

HashTable.prototype.retrieve = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  var set = this._storage.get(index); //[ [k,v]  ]

  for (var i = 0; i < set.length; i++) {
    if (set[i][0] === k) {
      return set[i][1];
    }
  }
  return null;


  

};

HashTable.prototype.remove = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);

  var set = this._storage.get(index);   // [ [k, v],  undefined  , [c, d] , [a, b] ]


  // if(this._storage.retrieve(k)) !== null){



  // };


  for (var i = 0; i < set.length; i++) {
    if (set[i][0] === k) {
      set[i] = [];
    }
  }
  for (var i = 0; i < set.length; i++) {
    if (set[i] === []) {
      set[i][0] = set[i+1][0];
      set[i][1] = set[i+1][1];
      delete set[i+1];
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


