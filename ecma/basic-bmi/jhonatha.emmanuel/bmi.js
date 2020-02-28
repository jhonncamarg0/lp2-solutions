let weight = 200;
let height = 1.5;
const bmi = weight/height ** 2;
let result;

if (bmi < 18.5) {
    result = "Underweight";
    
} 
else if (bmi <= 24.9) {
    result = "Nomal weight";

} 
else if (bmi >= 25 && bmi <= 29.9) {
    result = "Overweight";

} 
else if (bmi >= 30) {
    result = "Obesity";

}

console.log(result);