var Stackprototypal = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //
  var someStack = Object.create(stackMethods);
  someStack.storage= {};
  someStack.counter = 0;

  return someStack;
};

var stackMethods = {
  push : function(value) {
    this.storage[this.counter] = value;
    this.counter++
  },
  pop : function() {
    var temp = this.storage[this.counter-1];
    if(this.counter > 0) {
      delete this.storage[this.counter-1];
      this.counter--;
    }
    return temp;
  },
  size : function() {
    return this.counter;
  }
};


