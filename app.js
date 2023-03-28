// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.getElementById("btn")!;
// const add = function (val1: number, val2: number){
//     return val1 + val2;
// }
// button.addEventListener("click", function(){
//     const firstVal = input1.value;
//     const secondVal = input2.value;
//      console.log(add(+firstVal, +secondVal))
// })
// const arr1: number[] = [1, 2, 3];
// arr1.push(5);
// const arr2: string[] = ["Aqsa", "Laiba", "Dania"]
// arr2.push("Tasmiya");
// type Person = {
//     name: string;
//     rollno: number;
//     hobbies: string[];
//     email?: string;
// }
// // use ? for optional type
// let person: Person = {
//     name: "Aqsa",
//     rollno: 46,
//     hobbies: ["Reading Books", "Coding"],
//     email: "",
// }
// person.email = "abc@gmail.com";
// let persons: Person[] = [];
// persons.push({
//   name: "Aisha",
//   rollno: 16,
//   hobbies: ["Reading Books"],
// })
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1;
number1 = 5;
var number2 = 2.8;
var printResult = false;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
