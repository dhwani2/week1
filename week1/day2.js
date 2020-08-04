
// #1
// /*
// 	A student scored 
// 	25/50 in math, 
// 	30/50 in english, 
// 	14/50 in Physics, 
// 	48/50 in Chemistry
// 	and 50/50 in Accounting
// 	Calculate and print out the average.
// 	Also calculate and print out overall percentage.
// */

// // subject marks
// let math = 25;
// let english = 30;
// let physics = 14;
// let chemistry = 48;
// let accounting = 50;

// // total
// let total = 50;

// // calculate average
// let avg = (math + english + physics + chemistry + accounting)/5;
// console.log(`Your average is ${avg}/${total}`);

// // calculate percentage
// let percentage = (avg/total)*100;
// console.log(`Your percentage is ${percentage}%`);

// #2
/*
Given 5 numbers, find and print the largest one.
*/

// // declare variables
// let num1 = -900;
// let num2 = 13.3298;
// let num3 = 23;
// let num4 = 1.0009;
// let num5 = 32;

// // if conditions for if the numbers are greater 
// if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//   console.log("num1 is the largest")
// }
// else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//   console.log("num2 is the largest");
// }
// else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//   console.log("num3 is the largest");
// }
// else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//   console.log("num4 is the largest");
// }
// else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
//   console.log("num5 is the largest");
// }
  

// #3
/*
	Find and log the sign of the product of three numbers.
	Example: 
		Sample numbers : 3, -7, 2
		Output : The sign is - 
*/

// // numbers
// let num1 = 78;
// let num2 = 56;
// let num3 = -900

// // variable for the product
// let product = num1 * num2 * num3;

// // if the product is greater than 0 (+)
// if (product > 0) {
//   console.log("The sign is +");
// }
// // else if the product is less than 0 (-)
// else if (product < 0) {
//   console.log("The sign is -")
// }

// #4
/*
	Given 2 pairs of numbers, calculate and log the sum of their products.
	Example: 
		(assume the first 2 numbers are a pair and the last 2 are a pair)
		Sample numbers : 5, 10, 3, 6 
		Output : The sum of products is 68
*/

// // declare the numbers
// let num1 = 5;
// let num2 = 10;
// let num3 = 3;
// let num4 = 6

// // find the products of the pairs
// let product1 = num1 * num2;
// let product2 = num3 * num4;

// // calculate the sum of the two products
// let sum = product1 + product2;

// // print out the sum of the products
// console.log(`The sum of products is ${sum}`);

// day 2
/*
Declare two variable containing any 2 numbers.
Print out the product, division and addition of the two numbers.
Also print out True or False based on whether the two numbers are equal. 
*/

// variables
let num1 = 12
let num2 = 10

let product = num1 * num2;
let quotient = num1/num2;
let sum = num1 + num2;
let equal;

if (num1 === num2) {
    equal = true;
}
else {
    equal = false;
}

console.log(`The product is ${product} The quotient is ${quotient} The sum is ${sum} and equality is ${equal}`)