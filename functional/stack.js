var Stackfunctional  = function(){
  //expose methods here that interact with storage.
  //returns someInstance, which has closure scope access to storage.
  //no other way to interage with storage. private variables.
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    var temp = storage[size-1];

    if ( size > 0) {
      delete storage[size-1];
      size--;
    }

    return temp;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
