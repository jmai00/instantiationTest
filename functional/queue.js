var Queuefunctional = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;

  };

  someInstance.dequeue = function(){
    var temp = storage[top];
    if(someInstance.size() > 0) {
      delete storage[top];
      top++;
    }
    return temp;

  };

  someInstance.size = function(){
    return size - top;
  };

  return someInstance;
};
