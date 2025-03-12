let Roll: number = 22;
let Name: string = "Shamoon";
let IsPresent: boolean = true;

let IDs: number[] = [1, 2, 3, 4, 5];
let Names: string[] = ["Shamoon", "Areeb", "Ammar"];
let x: any = "Ammar";
let xArr: any[] = [1, "Ammar", true];

function concatenateValues(a: string, b: string): string {
    return a + b
};

console.log(concatenateValues("Hello", "World"));


interface userInterface {
    id: number,
    name: string,
    isActive?: boolean,
    greet(message: string): void
}

const user: userInterface = {
    id: 1,
    name: "Shamoon",
    // isActive: true
    greet(message) {
        console.log(message)
    }
}

user.greet("Hello , my greetings")

// function printID(id: number | string) {            // using 2 types of data 
//     console.log("ID = " + id);
// }

// OR

type IDtype = string | number;
function printID(id: IDtype) {
    console.log("ID = " + id);
}

printID("id9875");


interface BuisnessPartner {
    name: string,
    credit: number
}

interface UserIdentity {
    id: number,
    email: string
}

type Employee = BuisnessPartner & UserIdentity;

const signContract = (emoloyee  :Employee):void => {
    console.log("Contract signed by : "+ emoloyee.name +" with email : "+ emoloyee.email);
}


signContract({
    name: "Shamoon",
    credit: 100,
    id: 1,
    email: "7M0yP@example.com"
})