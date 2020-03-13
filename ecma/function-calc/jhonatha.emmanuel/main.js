let a = 1;

let b = 2;

let op = "+";

if (op == "+") {
    const som = require ('./function-calc/jhonatha.emmanuel/function.js');
    call.som();
    console.log(som(a, b));

}

else if (op == "-") {
    const sub = require ('./function-calc/jhonatha.emmanuel/function.js');
    call.sub();
    console.log(sub(a, b));

}

else if (op == "x") {
    const mul = require ('./function-calc/jhonatha.emmanuel/function.js');
    call.mul();
    console.log(mul(a, b));

}

else if (op == "/") {
    const div = require ('./function-calc/jhonatha.emmanuel/function.js');
    call.div();
    console.log(div(a, b));

}