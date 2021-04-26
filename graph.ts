class Graph {
  data: {
    vertex?: any
  }
  constructor() {
      this.data = {}
  }

  addVertex(vertex) {
    if (!this.data.vertex) {
      this.data[vertex] = []
    }
  }
  
  removeVertex(vertex) {
    if (this.data[vertex]) {
      this.data[vertex].forEach(elem => {
        this.removeEdge(vertex, elem)
      })
      delete this.data[vertex]
    }
  }
  
  addEdge(vertex1, vertex2) {
    const first = this.data[vertex1]
    console.log()
    const second = this.data[vertex2]
    if (
      first
      && second
      && vertex1 !== vertex2
      && !first.includes(vertex2)
      && !second.includes(vertex1)
    ) {
      first.push(vertex2)
      second.push(vertex1)
    }
  }
  
  removeEdge(vertex1, vertex2) {
    const first = this.data[vertex1]
    const second =  this.data[vertex2]
    if (first && second) {
      this.data[vertex1] = this.data[vertex1].filter(elem => elem !== vertex2)
      this.data[vertex2] = this.data[vertex2].filter(elem => elem !== vertex1)
    }
  }
}
