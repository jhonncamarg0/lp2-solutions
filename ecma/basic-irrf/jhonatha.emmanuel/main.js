let taxrate = 0;
let deduction = 0;
let salary = 3000;

if (salary >= 1.903,98) {
    taxrate = 1;
    deduction = 0;

}

else if (salary >= 1.903,99 && salary <= 2.826,65) {
    taxrate = 7.5;
    deduction = 142.80;

}

else if (salary >= 2.826,66 && salary <= 3.751,05) {
    taxrate = 15;
    deduction = 354.80;

}

else if (salary >= 3.751,06 && salary <= 4.664,68) {
    taxrate = 22.5;
    deduction = 636.13;

}

else if (salary > 4.664,68) {
    taxrate = 27.5;
    deduction = 869.36;

}

const tax = (salary * taxrate) - deduction;

console.log(tax);