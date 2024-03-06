class Stack {
  constructor(){
    this.stack = []
  }

  push(element){
    this.stack.push(element)
    return this.stack
  }

  pop(){
    return this.stack.pop()
  }

  peek(){
    return this.stack[this.stack.length - 1]
  }

  size(){
    return this.stack.length
  }

  print(){
    console.log(this.stack)
  }
}


class Book{
  constructor(name, bsn, author, editorial){
    this.name = name
    this.bsn = bsn
    this.author = author
    this.editorial = editorial
  }
}

const stack = new Stack()
const book1 = new Book("Book1", 121, "Gabo", "Planeta")
const book2 = new Book("Book2", 122, "Gabo", "Planeta")
const book3 = new Book("Book3", 123, "Gabo", "Planeta")
const book4 = new Book("Book4", 124, "Gabo", "Planeta")
const book5 = new Book("Book5", 125, "Gabo", "Planeta")

//Push
stack.push(book1)
stack.push(book2)
stack.push(book3)
stack.push(book4)
stack.push(book5)

//Print
console.log(stack.print())

//Size
console.log(stack.size())

//Pop
console.log(stack.pop())

//Peek
console.log(stack.peek())
