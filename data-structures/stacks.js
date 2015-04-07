// a stack is a structure in which you can only interact with one end of the structure
// It is what we call a LIFO structure, Last In First Out.
// we're gonna use a pseudo classical pattern

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index++] = value;
}

Stack.prototype.pop = function() {
  var popped = null;
  if(this.index > 0) {
    popped = this.storage[--this.index];
    delete this.storage[this.index];
  }
  return popped;
}
