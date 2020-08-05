/*
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append (add) “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
Console.log every step of the way
*/

// making the array
styles = ["Jazz", "Blues"];
console.log(styles);

// push an element
styles.push("Rock-n-Roll");
console.log(styles);

// find + replace the middle element
styles[Math.floor(styles.length/2)] = "Classics";
console.log(styles);

// remove the first element
styles.shift();
console.log(styles);

// add rap and reggae
styles.push("Rap", "Reggae");
console.log(styles);

