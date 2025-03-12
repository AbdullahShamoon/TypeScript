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
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "nouser";
    LoginError["WrongCredentials"] = "Wrongcredentials";
    LoginError["Internal"] = "Internal";
})(LoginError || (LoginError = {}));
const printErrorMsg = (error) => {
    if (error == LoginError.Unauthorized) {
        console.log("User is not Authorized");
    }
    else if (error == LoginError.NoUser) {
        console.log("User not found");
    }
    else if (error == LoginError.WrongCredentials) {
        console.log("Wrong credentials");
    }
    else {
        console.log("Internal Error");
    }
};
printErrorMsg(LoginError.WrongCredentials);
// GENERICS
class StorageContainer {
    constructor() {
        this.data = [];
    }
    // constructor(){
    //     this.data=[];
    // }
    addItem(item) {
        this.data.push(item);
    }
    getItem(index) {
        return this.data[index];
    }
}
const username = new StorageContainer();
username.addItem("Shamoon");
username.addItem("Abdullah");
console.log(username.getItem(0));
const rollNumber = new StorageContainer();
rollNumber.addItem(12);
rollNumber.addItem(9);
console.log(rollNumber.getItem(0));
