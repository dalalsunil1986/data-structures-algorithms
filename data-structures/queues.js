// A queue is a FIFO structure
// the first element to get in the queues is the first element to come out.
// much like an accordeon you have the two ends of the structure either getting closer or being much further apart.
// The end and the start will move separately. the trick is to not let the start pass the end.

function Queue() {
  this.storage = {};
  this.start = 0;
  this.end = 0;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.end++] = value;
};

Queue.prototype.dequeue = function() {
  var dequeued = null;
  if(this.start < this.end){
    dequeued = this.storage[this.start];
    delete this.storage[this.start++];
  }
  return dequeued;
};

Queue.prototype.size = function() {
  return this.end - this.start;
};
