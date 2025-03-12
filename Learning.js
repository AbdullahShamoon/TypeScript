"use strict";
let Roll = 22;
let Name = "Shamoon";
let IsPresent = true;
let IDs = [1, 2, 3, 4, 5];
let Names = ["Shamoon", "Areeb", "Ammar"];
let x = "Ammar";
let xArr = [1, "Ammar", true];
function concatenateValues(a, b) {
    return a + b;
}
;
console.log(concatenateValues("Hello", "World"));
const user = {
    id: 1,
    name: "Shamoon",
    // isActive: true
    greet(message) {
        console.log(message);
    }
};
user.greet("Hello , my greetings");
function printID(id) {
    console.log("ID = " + id);
}
printID("id9875");
const signContract = (emoloyee) => {
    console.log("Contract signed by : " + emoloyee.name + " with email : " + emoloyee.email);
};
signContract({
    name: "Shamoon",
    credit: 100,
    id: 1,
    email: "7M0yP@example.com"
});
