class Person {
    constructor(fullName, birthdate) {
        this.fullName = fullName;
        this.birthdate = birthdate;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }

    // Pre-order traversal
    printPreOrder() {
        console.log(this.fullName + ", " + this.birthdate); // Visit the root
        for (const child of this.children) {
            child.printPreOrder(); // Then visit the children
        }
    }

    // Post-order traversal
    printPostOrder() {
        for (const child of this.children) {
            child.printPostOrder(); // First visit the children
        }
        console.log(this.fullName + ", " + this.birthdate); // Then visit the root
    }

    // In-order traversal
    printInOrder() {
        const half = Math.floor(this.children.length / 2);
        for (let i = 0; i < half; i++) { // Visit left children
            this.children[i].printInOrder();
        }
        console.log(this.fullName + ", " + this.birthdate); // Visit root
        for (let i = half; i < this.children.length; i++) { // Visit right children
            this.children[i].printInOrder();
        }
    }
}

// Construcción del árbol de familia
const root = new Person("Carlos Torres", "1950-01-01");

const child1 = new Person("Maria Mercedes", "1975-05-20");
const child2 = new Person("Antonio Cruz", "1978-02-10");

root.addChild(child1);
root.addChild(child2);

child1.addChild(new Person("Sara Torres", "2000-03-15"));
child2.addChild(new Person("Priscila Arias", "2003-06-25"));

// Imprimir el árbol de familia
console.log("Recorrido Pre-order:");
root.printPreOrder();

console.log("\nRecorrido Post-order:");
root.printPostOrder();

console.log("\nRecorrido In-order:");
root.printInOrder();
