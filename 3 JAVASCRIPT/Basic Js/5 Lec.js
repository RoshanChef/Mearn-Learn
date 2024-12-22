// string to object 
let user = '{"name":"roshan" , "roll":30}';
console.log(user);

let charactor = JSON.parse(user);

console.log(charactor);
console.log(typeof (charactor));

console.log('Name is ', charactor.name);

// obj to string 
var obj = { name: 'Krishan', bc: 1572 };
console.log(obj);

let result = JSON.stringify(obj);
console.log(result);
console.log(typeof (result));

// iife => Imediately invoked function
(function () { console.log('fnx is called here ') })();


// private variable
(function () {
    var a = 12;
    console.log(a);
})


// how to change private variables
let ans = (function(){
    var a = 122; 
    return {
        getter:function(){
            console.log(a);
        } ,
        setter:function(val){
            a = val; 
        }
    }
})

