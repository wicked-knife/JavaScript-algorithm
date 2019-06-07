/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = new Array(k)
  this.front = 0
  this.rear = 0
}

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if(!this.isFull()) {
    this.queue[ this.rear ] = value
    this.rear++
    if(this.rear === this.queue.length) {
      this.rear = 0
    }
    return true
  } else {
    return false
  }
}

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if(this.isEmpty()) {
    return false
  } else {
    this.queue[ this.front ] = undefined
    this.front++
    if(this.front === this.queue.length) {
      this.front = 0
    }
    return true
  }
}

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.queue[ this.front ] === undefined ? -1 : this.queue[ this.front ]
}

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if(this.rear - 1 < 0) {
    return this.queue[ this.queue.length - 1 ] === undefined ? -1 : this.queue[ this.queue.length - 1 ]
  }
  return this.queue[ this.rear - 1 ] === undefined ? -1 : this.queue[ this.rear - 1 ]
}

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.rear === this.front && this.queue[ this.front ] === undefined
}

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.rear === this.front && this.queue[ this.front ] !== undefined
}

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

export default MyCircularQueue