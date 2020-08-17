// interface thingsForRoom {
//     numberOfItems: number;
//     furnishing: string[];
//     cost: number
// }

// const somethingFun: string = "Riding my bike is fun!";
// console.log(somethingFun);

// const sandwich: string = "BLT";
// const orderNumber: number = 1738;
// const delicious: boolean = true;

// function orderFood(sandwich: string, orderNumber: number): void {
//     console.log('Your order number is ' + orderNumber + ' and contains a ' + sandwich + ' sandwich');
// }

// orderFood('Ham and Chees', 32);

// const dreamJob: boolean = true;
// const jobType: string = "Working Remote!";
// const salary: number = 100000;

// function jobFunction(dreamJob: boolean, jobType: string, salary: number){
//     console.log("True or false, am I going to have my dream job? Answer.. " + dreamJob + "! Awesome, what type of job will it be? Answer.. " + jobType + "! Great! So what about the salary? What will it be? Answer.. " + salary + "! Wow! Thats a lot of chedda! Just think of the things we can do and the people we can bless!");
// }

// jobFunction(true, "working remote", 100000);

// const age: number = 32;
// const ageAsString: string = age.toString();

// const greeting: string = "Hello, my age is " + ageAsString + ".";

// console.log(greeting);

// const age: string = "55";
// const ageAsNumber: number = parseInt(age);
// const numberCalculation= ageAsNumber * 10;

// console.log(numberCalculation);


// interface Person {
//     age: number;
//     name: string;
// }

// var fred = {} as Person;
// fred.age  = 57;
// fred.name  = "Fred Wilkinson";

// const personName: any = "Fred Wilkinson";
// const fredName: string =<string> personName;

// interface mediaRoom {
//     readonly numberOfItems: number;
//     furniture: string[];
//     cost?: number;
// }

// function makeAMediaRoom(furniture: mediaRoom){
//     console.log( "Your media room includes " + 
//     furniture.numberOfItems +
//     " items of " + furniture.furniture + '. which comes out to be a total of ' + furniture.cost + " dollars in cost"
//     );
// }

// const mediaRoomInfo = {
//     numberOfItems: 3,
//     furniture: ['projector', "couch", "bar"],
   
// };

// makeAMediaRoom(mediaRoomInfo);

// interface Lifespan {
//     currentTime: Date;
//     printDate(): void;
// }

// class AppointmentDateFormatter implements Lifespan {
//     currentTime: Date;

//     constructor(day:number, month:number, year:number){
//         this.currentTime = new Date(year, month, day);
//     }

//     printDate(): void {
//         console.log(this.currentTime.toDateString());
//     }

// }

// const dateOfAppointment = new AppointmentDateFormatter(17,7,2020);
// dateOfAppointment.printDate();

// interface timeTest {
//     currentTime: Date;
// }

// class TimeTestFormatter implements timeTest {
//     currentTime: Date;

//     constructor(month: number, day: number, year:number) {
//         this.currentTime = new Date(month, day, year);
//     }
// }

// interface Animal {
//     name: string;
//     whoAmI(): void;
// }

// interface Mammal {
//     brushHair(): void;
// }

// interface WingedAnimal {
//     fly(): void;
// }

// class Bat implements Animal, Mammal, WingedAnimal {
//     name: string;

//     constructor(name: string) {
//         this.name = name
//     }

//     whoAmI(): void {
//         console.log("I'm " + this.name + "!");
//     }

//     brushHair(): void {
//         console.log("I must brush my hair to look pretty!");
//     }

//     fly(): void {
//         console.log("Look! I can fly!");
//     }
// }

// let bat = new Bat("Bartok");
// bat.whoAmI();
// bat.brushHair();
// bat.fly();


interface ESRI {
    map: number;
}

interface Hover {
    mapHover():void;
}

class Waymaker implements ESRI, Hover {
    map:number;
    
    constructor (map:number){
        this.map = map;
    }

mapHover():void {
    console.log("The number for your point is " + this.map)
}
}

let waymaker = new Waymaker(12.5678);
waymaker.mapHover();


// TypeScript-----Typescript, as an alternative to JavaScript, adds new features, functionality, and rules to language in order to make your code more predictable and prevent errors when programming.

// Static typing----- Types can be declared and then the compiler checks that the correct types of values are being used. If no type is specified, it will be inferred from your code.

// Type casting-----Allows for the conversion of a string to a number or a number to a string.

// Type Assertion-----Allows you to officially define the types so when the compiler reads your TypeScript code, it cannot assume anything; it knows the type

//Interfaces-----Blueprints of types that are easily reused or updated throughout your application.

///////////////Interfaces, class implementing interfaces, constructor, new instance of class, calling methos using new instance/////////////////

interface Person {
    firstName: string;
    lastName?: string;
}

interface Contact{
    phoneNumber: number;
    email?: string
}

class ContactCard implements Person, Contact {
    firstName: string;
    phoneNumber: number ;

    constructor(firstName: string, phoneNumber: number){
      this.firstName = firstName;
      this.phoneNumber = phoneNumber;
    }

    sendMessage(){
        console.log("Name: " + this.firstName + '\n' + "Number: " + this.phoneNumber);
    }
}

let newPerson = new ContactCard("Joshua", 3347016262);
newPerson.sendMessage();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//





