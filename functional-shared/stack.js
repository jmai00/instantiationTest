var Stackfunctionalshared = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someStack = { storage:{}, counter:0};
  extend(someStack, stackMethods);
  return someStack;
};

var stackMethods = {
  push : function ( value ) {
    this.storage[this.size()] = value;
    this.counter++;
  },

  pop : function () {
    var something = this.storage[this.size() - 1];

    if ( this.size() > 0) {
      delete this.storage[this.size()-1];
      this.counter--;
    }

    return something;
  },

  size : function () {
    return this.counter;
  }

};

var extend = function(ob1, ob2) {
  for(var key in ob2) {
    ob1[key] = ob2[key];
  }
};

