class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

class City {
    constructor(name) {
        this.name = name;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
        this.adjList = {};
    }

    addPerson(name, age, city) {
        const person = new Person(name, age, city);
        this.addNode(person);
        this.addEdge(person, city);
    }

    addCity(name) {
        const city = new City(name);
        this.addNode(city);
    }

    addNode(node) {
        this.nodes.push(node)
        this.adjList[node.name] = []
    }

    addEdge(node1, node2){
        this.adjList[node1.name].push(node2)
        this.adjList[node2].push(node1)
    }

    printGraph(){
        console.log(this.adjList)
    }
}

const graph = new Graph();
graph.addCity("New York");
graph.addCity("London");
graph.addCity("Paris");

graph.addPerson("Juan", 30, "New York");
graph.addPerson("Andres", 25, "London");
graph.addPerson("Salomon", 35, "New York");
graph.addPerson("Andrea", 28, "Paris");
graph.addPerson("Lucia", 32, "London");

graph.printGraph();
