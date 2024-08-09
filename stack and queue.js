
//-------------------------- Stack class ( lifo /fiLo)
class Stack{
  constructor(){
    this.data=[]
  }
  add(element){
    this.data.push(element)
  }
  Remove(){
    this.data.pop()
  }
  Size(){
    return this.data.length
  }
  Peek_check(){
    return this.data[this.data.length-1]
  }

}

const ST1= new Stack()
ST1.add("iyed")
ST1.add("bechir")
ST1.add("ahmed")

ST1.Size()  // Retrun 3
ST1.Peek_check() // 

//------------------------------ Queues class ( fifo rules )
/*
Create a class Queue that implements a queue with the following functionalities:

A constructor that initializes an empty queue.
A method enqueue that adds an item to the end of the queue.
A method dequeue that removes and 
returns the item from the front of the queue. If the queue is empty, it should return null.
A method peek that returns the item at the front of the queue without removing it. If the queue is empty, it should return null.
A method isEmpty that returns true if the queue is empty, otherwise false.
A method size that returns the number of items in the queue.

*/
class Queue {
  constructor(){this.data=[]}

  IsEmpty(){
    return this.data.length==0 ? true:false
  }

  Enqueue(element){
    this.data.push(element)
  }
  Dequeue(){

    if(this.data.length!=0) {
    var msg = this.data[0] + " was deleted from the Queue"
    this.data.shift()
    return msg }
    else return null
  }
  Peek(){
    if(this.data.length!=0) {
      var msg = this.data[0] + " is the first element of the Queue"
      return msg }
      else return null
  }

  Size(){
    return this.data.length
  }

}

const Q1 = new Queue()
Q1.Enqueue("iyed");
Q1.Enqueue("bechir");
