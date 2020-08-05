/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. (This one is a bit tricky and you will need to look it up).
Console log every step of the way.
*/

// make an empty object
let user = {};
console.log(user);

// add the name and surname
user.name = "John";
user.surname = "Smith";
console.log(user);

// change the value of name to pete
user.name = "Pete";
console.log(user);

// remove the property name using delete
delete user.name;
console.log(user);