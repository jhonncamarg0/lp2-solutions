let i = 0;
let h = 0;
let n = prompt("Digite o valor de (n): ");
parseInt(n);
do { i++; h += (1 / i); }
while(i < n);
document.getElementById("xxx").innerHTML = (`${h}`);