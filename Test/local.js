function calc(n) {
    if (n == 1)
        return 1;
    return n + calc(n - 1);
}
console.log('value ', calc(10));

let arr = [3, 5, 4, 2, 1];

