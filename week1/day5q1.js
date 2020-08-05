/*
	Loop over numbers 1 to 100 (inclusive) and only print numbers that are odd.
	Do not copy over the code from the continue statement example.
*/

// for loop to print
for (let i = 1; i <= 100; i++) {
    // if the remainder is not equal to zero, it's odd
    if (i %2 !== 0) {
        continue;
    }
    // print out the num
    console.log(i);
}