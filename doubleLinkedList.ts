type newNode = {} | null

interface NewNodeProps {
  prev: any
  next: any
  value: any
}

class NewNode {
  value: any

  prev: any

  next: any

  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  head: any

  tail: any

  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new NewNode(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (this.length === 0) {
      return false
    }
    const popped = this.tail
    const newTail = this.tail.prev
    if (newTail) {
      newTail.next = null
      this.tail.prev = null
    } else {
      this.head = null
    }
    this.tail = newTail
    this.length--

    return popped
  }

  shift() {
    if (!this.head) {
      return false
    }
    const shiftedNode = this.head
    const newHead = this.head.next
    if (this.head !== this.tail) {
      newHead.prev = null
      shiftedNode.next = null
    } else {
      this.tail = null
    }
    this.head = newHead
    this.length--
    return shiftedNode
  }

  unshift(val) {
    const newNode = new NewNode(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  insertAtIndex(index, val) {
    if (index > this.length) {
      return false
    }
    if (index === 0) {
      this.unshift(val)
    } else if (index === this.length) {
      this.push(val)
    } else {
      const newNode = new NewNode(val)
      const after = this.getNodeAtIndex(index)
      const before = after.prev
      after.prev = newNode
      before.next = newNode
      newNode.next = after
      newNode.prev = before
      this.length++
    }
    return this
  }

  removeAtIndex(index) {
    let removedNode
    if (index >= this.length) {
      return false
    }
    if (index == 0) {
      removedNode = this.shift()
    } else if (index == this.length - 1) {
      removedNode = this.pop()
    } else {
      removedNode = this.getNodeAtIndex(index)
      const after = removedNode.next
      const before = removedNode.prev
      removedNode.next = null
      removedNode.prev = null
      before.next = after
      after.prev = before
      this.length--
    }
    return removedNode
  }

  getNodeAtIndex(index) {
    if (index >= this.length || index < 0) {
      return false
    }
    let currentIndex = 0
    let currentNode = this.head
    while (currentIndex !== index) {
      currentNode = currentNode.next
      currentIndex++
    }
    return currentNode
  }

  setNodeAtIndex(index, val) {
    const foundNode = this.getNodeAtIndex(index)
    if(foundNode){
        foundNode.value = val
        return foundNode
    }
    return null
  }
  
  printList() {
    if(this.head){
      let current = this.head
      while (current.next) {
        console.log(current)
        current = current.next
      }
      console.log(current)
    } else {
      console.log("empty list")
    }
  }
}