class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class Task{
  constructor(id, title, description, points){
    this.id = id
    this.title = title
    this.description = description
    this.points = points
  }
}

class LinkedTasks {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(task) {
    //console.log(node)
    const newNode = new Node(task)

    if (!this.head) this.head = newNode
    else this.tail.next = newNode

    this.tail = newNode
  }

  remove(value, current= this.head) {
    if (this.head === null) {
      return false
    }

    if (this.head.value.id === value) {
      return this.head = this.head.next
    }

    if (current.next !== null) {
      if (current.next.value.id === value) {
        current.next = current.next.next
        return true
      } else {
        return this.remove(value, current.next)
      }
    }
  }

  print(){
    let node = this.head
    while(node != null){
    console.log(`Title: ${node.value.title}, Description: ${node.value.description}, Points: ${node.value.points}\n`)
    node= node.next
    }

  }
}

const linkedTask = new LinkedTasks()
const todo1 = new Task(1, "Todo1", "Description 1",3)
const todo2 = new Task(2, "Todo2", "Description 1",5)
const todo3 = new Task(3, "Todo3", "Description 1",8)
const todo4 = new Task(4, "Todo4", "Description 1",3)

linkedTask.append(todo1)
linkedTask.append(todo2)
linkedTask.append(todo3)
linkedTask.append(todo4)
linkedTask.print()
console.log("-------------------")
linkedTask.remove(2)
linkedTask.print()
