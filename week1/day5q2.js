/*
	Given an array, print out all its members using the 
		1. for loop, 
		2. for in loop, 
		3. for of loop,
		4. while loop.
*/

// FAANG array
faang = ["Facebook", "Apple", "Amazon", "Netflix", "Google"];

// print using a for loop
console.log("\nFor loop")
for (let i = 0; i < faang.length; i++) {
    console.log("for loop", faang[i]);
}

// for in loop
console.log("\nFor in loop");
for (let key in faang) {
    console.log(key, faang[key]);
}

// for of loop
console.log("\nFor of loop:")
for (let element of faang) {
    console.log(element);
}

// while loop
console.log("\nWhile loop");
let i = 0;
while(i < faang.length) {
    console.log(faang[i]);
    i++;
} 