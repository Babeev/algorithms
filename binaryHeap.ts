class BinaryHeap {
  data: any[]
  constructor() {
    this.data = []
  }

  insert(node) {
    this.data.push(node)
    this.bubbleUp()
  }
  
  // Удаление корневого элемента.
  // Возвращает корневой элемент, если он есть, в противном случае –– undefined.
  extract() {
    let removed = this.data[0]
    let end = this.data.pop()
    if (this.data.length > 0) {
        this.data[0] = end
        this.bubbleDown()
    }
    return removed
  }

  bubbleDown() {
    let targetIdx = 0
    while (true) {
      let target = this.data[targetIdx]
      let leftChildIdx = targetIdx * 2 + 1
      let rightChildIdx = targetIdx * 2 + 2
      let left = this.data[leftChildIdx]
      let right = this.data[rightChildIdx]
      let swap = null
      if (leftChildIdx < this.data.length && target < left){
          swap = leftChildIdx
      }
      if (rightChildIdx < this.data.length && target < right && left < right){
          swap = rightChildIdx
      }
      if (swap === null) break
      this.data[targetIdx] = this.data[swap]
      this.data[swap] = target
      targetIdx = swap
    }
  }
    
  bubbleUp() {
    let targetIdx = this.data.length - 1
    let target = this.data[targetIdx]
    while(targetIdx > 0){
        let parentIdx = Math.floor((targetIdx - 1) / 2)
        let parent = this.data[parentIdx]
        if (target > parent) {
            this.data[parentIdx] = target
            this.data[targetIdx] = parent
            targetIdx = parentIdx
        }
        if (target <= parent) break
    }
  }
}