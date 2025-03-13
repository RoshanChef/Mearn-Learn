abstract class ab {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    abstract greet(): string;

    hello() {
        console.log("hello there");
    }
};

class empp extends ab {
    constructor(name: string) {
        super(name);
    }
    greet(): string {
        return "hi there";
    }
}


let oj = new empp("Rohan");

oj.hello();
console.log(oj.greet());
