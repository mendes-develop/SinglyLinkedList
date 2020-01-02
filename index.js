class Node {
  constructor(val){
      this.val = val
      this.next = null
  }
}



class SinglyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }


  push(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.length++
    this.tail = newNode
  }



  pop(){
    // this.


    return this.tail
  }
}

let firstNode = new Node(5)
let secondNode = new Node(10)
firstNode.next = secondNode
console.log(firstNode.next)





