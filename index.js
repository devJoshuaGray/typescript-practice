"use strict";
// interface thingsForRoom {
//     numberOfItems: number;
//     furnishing: string[];
//     cost: number
// }
var Waymaker = /** @class */ (function () {
    function Waymaker(map) {
        this.map = map;
    }
    Waymaker.prototype.mapHover = function () {
        console.log("The number for your point is " + this.map);
    };
    return Waymaker;
}());
var waymaker = new Waymaker(12.5678);
waymaker.mapHover();
var ContactCard = /** @class */ (function () {
    function ContactCard(firstName, phoneNumber) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }
    ContactCard.prototype.sendMessage = function () {
        console.log("Name: " + this.firstName + '\n' + "Number: " + this.phoneNumber);
    };
    return ContactCard;
}());
var newPerson = new ContactCard("Joshua", 3347016262);
newPerson.sendMessage();
