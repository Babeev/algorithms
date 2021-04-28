class MyArray {
  size: number

  memory: object
  
  length: number

	constructor(initialSize = 1) {
		if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
			throw new Error('Длина массива должна быть целым числом')
		}

		if (!(initialSize > 0)) {
      throw new Error('Размер массива должен быть больше нуля')
    }

		this.size = initialSize
		this.memory = allocate(initialSize)
		this.length = 0
	}
	
	get(index){
    console.log('get', index)
    this.checkIndex(index)
		return this.memory[index]
	}
	
	set(index, value) {
    this.checkIndex(index)
    this.memory[index] = value
	}

	add(value, index) {
    console.log('add', index, value)
    if (index === undefined) {
      this.memory[this.length] = value
      this.length++
    } else {
      this.checkIndex(index)
      this.set(index, value)
    }
    if (this.length === this.size) {
      const array = {...this.memory}
      this.size = this.size * 2
      this.memory = allocate(this.size)
      for (let i = 0; i <= this.length; i++) {
        this.memory[i] = array[i]
      }
    }
    return this.length
	}
	
	delete(index) {
    console.log('delete', index)
    this.checkIndex(index)
    this.memory[index] = undefined
    if (index === this.length - 1) {
      this.memory[this.length - 1] = undefined
      return --this.length
    }
    for (let i = index; i < this.length; i++) {
      this.memory[i] = this.memory[i + 1]
    }
    this.length--
    return this.length
  }
  
  checkIndex(index) {
    if (Number(index) !== index || Math.round(index) !== index) {
			throw new Error('Индекс должен быть целым числом')
		}
    if (index >= this.length || index < 0) {
      throw Error('Неправильный индекс')
    }
  }
}

function allocate(size) {
  const memory = {}

  for (let i = 0; i < size; i++) {
    memory[i] = undefined
  }

  return memory
}

const array = new MyArray();
console.log(array.add(1, 1))
array.set(2, 1);