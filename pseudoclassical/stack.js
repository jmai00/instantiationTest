var Stackpseudo = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //
  this.storage = {};
  this.counter = 0;
};

Stackpseudo.prototype.push = function (value){
  this.storage[this.counter] = value;
  this.counter++;
};
Stackpseudo.prototype.pop = function (){
  var temp = this.storage[this.counter-1];

  if (this.counter > 0) {
    delete this.storage[this.counter-1];
    this.counter--;
  }

  return temp;
};
Stackpseudo.prototype.size = function (){
  return this.counter;
};

