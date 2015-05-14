var Queuefunctionalshared = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //
  //
  var someQueue = {storage : {}, counter : 0, first : 0};
  extend(someQueue, queueMethods);
  return someQueue;
};



var queueMethods = {
  enqueue : function(value) {
    this.storage[this.counter] = value;
    this.counter++;

  },
  dequeue : function() {
    var temp = this.storage[this.first];
    if(this.size() > 0) {
      delete this.storage[this.first];
      this.first++;
    }
    return temp;

  },
  size : function() {
    return this.counter-this.first;
  }
};

var extend = function(ob1, ob2) {
  for(var key in ob2) {
    ob1[key] = ob2[key];
  }
};

