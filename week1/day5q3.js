/*
Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/

// print nums from 1-100
for (let i = 1; i <= 100; i++) {

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