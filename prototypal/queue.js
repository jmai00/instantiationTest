var Queueprototypal = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //
  var someQueue = Object.create(queueMethods);
  someQueue.storage = {};
  someQueue.counter = 0;
  someQueue.first = 0;

  return someQueue;
};

var queueMethods = {
  storage : {},
  counter : 0,
  first : 0,
  enqueue:function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  dequeue:function(){
    var temp = this.storage[this.first];

    if (this.size() > 0){
      delete this.storage[this.first];
      this.first++;
    }
    return temp;
  },

  size:function(){
    return this.counter-this.first;
  }
};


