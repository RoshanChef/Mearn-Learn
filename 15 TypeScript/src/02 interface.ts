interface People {
    age: number,
    name: string,
    great: () => string,
}

let person: People = {
    age: 23,
    name: "Roshan",
    great: () => "hello " + person.name,
}

// console.log(person.great());

class Manager implements People {
    name: string;
    age: number;
    number: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.number = "454";
    }

    great() {
        return "Good Morning !!";
    }

    get() {
        console.log(`name : ${this.name}\nage : ${this.age}`);
    }
}

let rohan: Manager = new Manager("Rohan", 23);
console.log(rohan.name);
console.log(rohan.age);
console.log(rohan.number);

rohan.get();
console.log(rohan.great());

interface level {
    name: string;
}

let lv: level = {
    name: "give me the name"
}


