function hello() {
    console.log("I am external function of Javascript");
}

export default function add(a, b) {
    return a + b;
}

export {
    hello,
    add
}
