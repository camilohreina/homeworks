class Queue {
  constructor(){
    this.queue = []
  }

  enqueue(element){
    this.queue.push(element)
    return this.queue
  }

  dequeue(){
    return this.queue.shift()
  }

  peek(){
    return this.queue[0]
  }

  size(){
    return this.queue.length
  }

  isEmpty(){
    return this.queue.length ===0
  }

  print(){
   return console.log(this.queue)
  }
}


class Person{
  constructor(name, date){
    this.name = name
    this.arrivedTime = date
  }
}

const queue = new Queue()
const person1 = new Person("Camilo", new Date("2024-02-28T11:01:00"))
const person2 = new Person("Henry", new Date("2024-02-28T11:02:00"))
const person3 = new Person("Andres", new Date("2024-02-28T11:03:00"))
const person4 = new Person("Luisa", new Date("2024-02-28T11:04:00"))
const person5 = new Person("Andrea", new Date("2024-02-28T11:05:00"))

//isEmpty
console.log(queue.isEmpty())

//Enqueue
queue.enqueue(person1)
queue.enqueue(person2)
queue.enqueue(person3)
queue.enqueue(person4)
queue.enqueue(person5)

//Print
console.log(queue.print())

//Size
console.log(queue.size())

//Dequeue
console.log(queue.dequeue())



console.log(queue.print())
