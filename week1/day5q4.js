/*
	Extend FizzBuzz and make it reusable for any range of numbers by using a function.
	Example: 
	fizzBuzz(0, 100) --> outputs the same as above
	fizzBuzz(12, 1901) --> Also works and outputs correctly.
*/


// make a fizzbuzz function and take num1, num2 as parameters
function fizzbuzz(num1, num2) {
    // for min and max ranges num1 and num2
    for (let i = num1; i <= num2; i++) {
    // multiple of 3 and 5
    if (i %3 == 0 && i %5 == 0) {
        console.log("FizzBuzz")
    } 
    // multiple of 3
    else if (i %3 == 0) {
        console.log("Fizz");
    }
    // multiple of 5
    else if (i %5 == 0) {
        console.log("Buzz");
    }
   // print the num if none of the statements are true
    else {
        console.log(i);
    } 
}

}

// call the function for any two numbers
fizzbuzz(1, 50);
