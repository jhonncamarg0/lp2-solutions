let a = 1;

let b = 2;

let op = "+";

if (op == "+") {
    const calc = require ('./function.js');
    let som = call.som()
    console.log(som(a, b));

}

else if (op == "-") {
    const calc = require ('./function.js');
    let sub = call.sub();
    console.log(sub(a, b));

}

else if (op == "x") {
    const calc = require ('./function.js');
    let mul = call.mul();
    console.log(mul(a, b));

}

else if (op == "/") {
    const calc = require ('./function.js');
    let div = call.div();
    console.log(div(a, b));

}