/* 
1. + (Addition / String Concatenation)
  - If either operand is a string, JS converts the other to a string and performs concatenation.
  - Otherwise, it performs numeric addition.

   if it obj then 
        - Call the object's valueOf() method — if it returns a primitive (number, string, boolean), use it.
        - Otherwise, call the object's toString() method — use that result.
    if Array then 
        - toString()
*/

console.log('5' + 1);        // "51"  (1 coerced to string)
console.log(1 + '5');        // "15"
console.log(true + 1);       // 2     (true → 1)
console.log(null + 1);       // 1     (null → 0)
console.log(undefined + 1);  // NaN   (undefined → NaN)

const obj = {
    valueOf() { return 10; },
    toString() { return "20"; }
};

console.log(obj + 5); // 15  (because valueOf() returns 10, so 10 + 5 = 15)
console.log(obj + "5"); // "105" (obj converts to 10, then string concatenation "10" + "5")


/*  
2. -, *, /, %, ** (Math Operators)
    - All these force operands to numbers.

*/
console.log('10' - '5');     // 5
console.log('10' * 2);       // 20
console.log('6' / '3');      // 2
console.log('8' % 3);        // 2
console.log('2' ** '3');     // 8
console.log(true * 3);       // 3  (true → 1)
console.log(false - 1);      // -1 (false → 0)


/*  
3. Relational Operators: <, >, <=, >=
    -If both operands are strings, JS does lexicographic comparison.
    -If one or both are not strings, they’re converted to numbers.

    Expression	Result	Explanation
    '5' < 10	true	'5' → 5
    '20' > '3'	false	Lexicographic: '2' < '3'
    true < 2	true	true → 1
    null >= 0	true	null → 0
    undefined < 1	false	undefined → NaN
*/

console.log('5' < 10);     // true ('5' → 5)
console.log('20' > '3');   // false (lexicographic, '2' < '3')
console.log(true < 2);     // true (true → 1)
console.log(null >= 0);    // true (null → 0)
console.log(undefined < 1); // false (undefined → NaN)


/*
    Expression	Result	Explanation
        '5' == 5	        true	'5' → 5
        null == undefined	true	Special rule in JS
        0 == false	        true	false → 0
        '' == 0         	true	'' → 0
        '0' == false	    true	'0' → 0, false → 0
*/

// 3. == (Loose equality)
console.log('5' == 5);            // true ('5' → 5)
console.log(null == undefined);   // true (special rule)
console.log(0 == false);           // true (false → 0)
console.log('' == 0);             // true ('' → 0)
console.log('0' == false);        // true ('0' → 0, false → 0)

// 4. === (Strict equality)
console.log('5' === 5);    // false (no coercion)
console.log(0 === false);  // false (different types)


