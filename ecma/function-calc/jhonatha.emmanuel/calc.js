let a = 1;

let b = 2;

let op = "+";

function som(a, b) {
    return a + b;

}

function sub(a, b) {
    return a - b;

}

function mul(a, b) {
    return a * b;

}

function div(a, b) {
    return a / b;

}

if (op == "+") {
    console.log(som(a, b));
}

else if (op == "-") {
    console.log(sub(a, b));
}

else if (op == "x") {
    console.log(mul(a, b));
}

else if (op == "/") {
    console.log(div(a, b));
}