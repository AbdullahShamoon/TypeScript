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
    readonly id: number,         // this means we cant change the value after creating it 
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

const signContract = (emoloyee: Employee): void => {
    console.log("Contract signed by : " + emoloyee.name + " with email : " + emoloyee.email);
}


signContract({
    name: "Shamoon",
    credit: 100,
    id: 1,
    email: "7M0yP@example.com"
})




enum LoginError {
    Unauthorized = "unauthorized",
    NoUser = "nouser",
    WrongCredentials = "Wrongcredentials",
    Internal = "Internal"
}

const printErrorMsg = (error: LoginError) => {
    if (error == LoginError.Unauthorized) {
        console.log("User is not Authorized")
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
}

printErrorMsg(LoginError.WrongCredentials)


// GENERICS

class StorageContainer<T> {
    private data: T[] = [];
    // constructor(){
    //     this.data=[];
    // }

    addItem(item : T){
        this.data.push(item);
    }

    getItem(index:number): T | undefined{
        return this.data[index];
    }
}

const username = new StorageContainer<string>();
username.addItem("Shamoon");
username.addItem("Abdullah");
console.log(username.getItem(0));


const rollNumber = new StorageContainer<number>();
rollNumber.addItem(12);
rollNumber.addItem(9);
console.log(rollNumber.getItem(0));
