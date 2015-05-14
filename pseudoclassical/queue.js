var Queuepseudo = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.first = 0;
  this.counter = 0;
};

Queuepseudo.prototype.enqueue = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
};
Queuepseudo.prototype.dequeue = function() {
  var temp = this.storage[this.first];
  if(this.size() > 0) {
    delete this.storage[this.first];
    this.first++;
  }
  return temp;
};
Queuepseudo.prototype.size = function () {
  return this.counter - this.first;
};



